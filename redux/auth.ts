import {
  createAsyncThunk,
  createSlice,
  SerializedError,
} from "@reduxjs/toolkit";
import {
  createUserWithEmailAndPassword,
  FacebookAuthProvider,
  GoogleAuthProvider,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  updateCurrentUser,
  updateEmail,
  UserCredential,
  reauthenticateWithCredential,
  reauthenticateWithPopup,
  EmailAuthProvider,
} from "firebase/auth";
import { toast } from "react-hot-toast";
import { firebaseAuth } from "../firebase/index";
import { postData, setCookie } from "../util/common-function";
import {
  EXPIRES,
  LOWER_TOKEN,
  REFRESH_TOKEN,
  USER_AUTH_TOKEN,
  USER_AUTH_UID,
} from "../util/const";
import { RootState } from "./store";
import {
  clearUser,
  createUser,
  getOrCreateFirebaseUser,
  getUser,
  deleteUser,
} from "./user";

const fbProvider = new FacebookAuthProvider();
const googleProvider = new GoogleAuthProvider();
export interface IAuthState {
  displayName?: string | null;
  email?: string | null;
  authenticated?: boolean;
  error?: SerializedError;
  status: "pending" | "fulfilled" | "rejected";
  providerID?: string;
  openLoginModal?: boolean;
  openSignUpModal?: boolean;
}

export interface ILoginFormPayload {
  email: string;
  password: string;
}

const initialState: IAuthState = {
  displayName: undefined,
  email: undefined,
  authenticated: undefined,
  error: undefined,
  status: "pending",
  providerID: undefined,
  openLoginModal: false,
  openSignUpModal: false,
};

interface IPayLoad {
  displayName?: string | null;
  email?: string | null;
  providerID?: string | null;
}

export interface loginnedResponseType {
  _tokenResponse: tokenResponseTypes;
  user: userTypes;
}

interface userTypes {
  displayName?: string;
  email?: string;
}

interface tokenResponseTypes {
  token: string;
}

interface ISignupFormPayload {
  email: string;
  password: string;
  displayName: string;
  getNotification: boolean;
  questionaries: string[];
}

export const signupUser = createAsyncThunk(
  "auth/signup",
  async (
    {
      email,
      password,
      displayName,
      getNotification,
      questionaries,
    }: ISignupFormPayload,
    thunkAPI
  ) => {
    toast.loading("Signing up...");
    try {
      const result: any = await createUserWithEmailAndPassword(
        firebaseAuth,
        email,
        password
      );

      await thunkAPI.dispatch(
        createUser({
          ...result.user,
          displayName,
          getNotification,
          questionaries,
        })
      );

      const { idToken } = result?._tokenResponse;

      // set Cookies
      setCookie(USER_AUTH_TOKEN, idToken, 7);
      setCookie(USER_AUTH_UID, result.user.uid, 7);

      if (result.user) {
        toast.dismiss();
        toast.success("Signed up successfully!");
      }

      return { displayName: result.user.displayName, email: result.user.email };
    } catch (error: any) {
      toast.dismiss();
      // toast.error(error.message);
      return thunkAPI.rejectWithValue({ error: error.message });
    }
  }
);

export const updateUserEmail = createAsyncThunk(
  "auth/updateEmail",
  async (email: string, thunkAPI) => {
    toast.loading("Updating email...");
    const user = firebaseAuth.currentUser;
    if (user) {
      try {
        await updateEmail(user, email);
        if (email) {
          toast.dismiss();
          toast.success("Email updated successfully!");
        }
        return { email };
      } catch (error: any) {
        toast.dismiss();
        toast.error(error.message);
        return thunkAPI.rejectWithValue({ error: error.message });
      }
    }
  }
);

export const updateUserDisplayName = createAsyncThunk(
  "auth/updateUserDisplayName",
  async (displayName: string, thunkAPI) => {
    toast.loading("Updating display name...");
    const user = firebaseAuth.currentUser;
    if (user) {
      try {
        await updateCurrentUser(firebaseAuth, { ...user, displayName });

        if (displayName) {
          toast.dismiss();
          toast.success("Display name updated successfully!");
        }
        return { displayName };
      } catch (error: any) {
        toast.dismiss();
        toast.error(error.message);
        return thunkAPI.rejectWithValue({ error: error.message });
      }
    }
  }
);

export const login = createAsyncThunk(
  "auth/login",
  async (data: ILoginFormPayload, thunkAPI) => {
    toast.loading("Logging in...");
    try {
      const result: any = await signInWithEmailAndPassword(
        firebaseAuth,
        data.email,
        data.password
      );
      const { idToken } = result?._tokenResponse;

      localStorage.setItem(LOWER_TOKEN, idToken);
      localStorage.setItem(EXPIRES, result.user.stsTokenManager.expirationTime);
      localStorage.setItem(
        REFRESH_TOKEN,
        result.user.stsTokenManager.refreshToken
      );

      // set Cookies
      setCookie(USER_AUTH_TOKEN, idToken, 7);
      setCookie(USER_AUTH_UID, result.user.uid, 7);
      setCookie(REFRESH_TOKEN, result.user.stsTokenManager.refreshToken, 7);
      await thunkAPI.dispatch(getUser(result.user.uid));

      const displayName = result.user?.displayName || "";
      const email = result.user?.email;

      if (email) {
        toast.dismiss();
        toast.success(`Welcome ${displayName || "to affordify"}!`);
      }

      return { displayName, email } as IPayLoad;
    } catch (error: any) {
      toast.dismiss();
      // toast.error(error.message);

      return thunkAPI.rejectWithValue({ error: error.message });
    }
  }
);

export const authenticate = createAsyncThunk(
  "auth/authenticate",
  async (user: any, thunkAPI) => {
    try {
      if (!user) {
        return thunkAPI.rejectWithValue({ error: "User is not authenticated" });
      }

      await thunkAPI.dispatch(getUser(user.uid));
      const displayName = user.displayName;
      const email = user.email;
      const providerID = "auth";
      return { displayName, email, providerID } as IPayLoad;
    } catch (error: any) {
      return thunkAPI.rejectWithValue({ error: error.message });
    }
  }
);

export const logout = createAsyncThunk("auth/logout", async (_, thunkAPI) => {
  try {
    await firebaseAuth.signOut();
    localStorage.removeItem(LOWER_TOKEN);
    localStorage.removeItem(REFRESH_TOKEN);
    localStorage.removeItem(EXPIRES);
    await thunkAPI.dispatch(clearUser());
  } catch (error: any) {
    return thunkAPI.rejectWithValue({ error: error.message });
  }
});

export const resetPassword = createAsyncThunk(
  "auth/resetPassword",
  async (email: string, thunkAPI) => {
    toast.loading("Sending password reset email...");
    try {
      await sendPasswordResetEmail(firebaseAuth, email, {
        url: `${process.env.REACT_APP_API_BASE_URL}/login`,
      });
      toast.dismiss();
      toast.success("Password reset email sent!");
    } catch (error: any) {
      toast.dismiss();
      toast.error(error.message);
      return thunkAPI.rejectWithValue({ error: error.message });
    }
  }
);

export const loginFacebook = createAsyncThunk(
  "auth/login-facebook",
  async (user: any = null, thunkAPI) => {
    try {
      if (!user) {
        try {
          const userCredential: UserCredential = await signInWithPopup(
            firebaseAuth,
            fbProvider
          );
          const displayName = userCredential.user?.displayName;
          const email = userCredential.user?.email;
          const response: any = await thunkAPI.dispatch(
            getOrCreateFirebaseUser(userCredential)
          );
          const { idToken } = response.meta.arg._tokenResponse;

          // set Cookies
          setCookie(USER_AUTH_TOKEN, idToken, 7);
          setCookie(USER_AUTH_UID, response.meta.arg?.user?.uid, 7);

          if (email) {
            toast.dismiss();
            toast.success(`Welcome ${displayName || "to affordify"}!`);
          }

          return { displayName, email } as IPayLoad;
        } catch (error: any) {
          return thunkAPI.rejectWithValue({ error: error.message });
        }
      } else {
        const displayName = user.displayName;
        const email = user.email;
        const providerID = "facebook";
        await thunkAPI.dispatch(getUser(user.uid)); // ?
        return { displayName, email, providerID } as IPayLoad;
      }
    } catch (error: any) {
      return thunkAPI.rejectWithValue({ error: error.message });
    }
  }
);

export const loginGoogle = createAsyncThunk(
  "auth/login-google",
  async (user: any = null, thunkAPI) => {
    try {
      if (!user) {
        try {
          const userCredential: UserCredential = await signInWithPopup(
            firebaseAuth,
            googleProvider
          );

          const displayName = userCredential.user?.displayName;
          const email = userCredential.user?.email;

          const response: any = await thunkAPI.dispatch(
            getOrCreateFirebaseUser(userCredential)
          );
          const { idToken } = response.meta.arg._tokenResponse;

          localStorage.setItem(LOWER_TOKEN, idToken);

          // set Cookies
          setCookie(USER_AUTH_TOKEN, idToken, 7);
          setCookie(USER_AUTH_UID, response.meta.arg?.user?.uid, 7);

          if (email) {
            toast.dismiss();
            toast.success(`Welcome ${displayName || "to affordify"}!`);
          }

          return { displayName, email } as IPayLoad;
        } catch (error: any) {
          return thunkAPI.rejectWithValue({ error: error.message });
        }
      } else {
        const displayName = user.displayName;
        const email = user.email;
        const providerID = "google";
        await thunkAPI.dispatch(getUser(user.uid)); // ?
        return { displayName, email, providerID } as IPayLoad;
      }
    } catch (error: any) {
      toast.dismiss();
      toast.error(error.message);
      return thunkAPI.rejectWithValue({ error: error.message });
    }
  }
);

export const deleteUserAccount = createAsyncThunk(
  "auth/delete-user-account",
  async ({ password, subscriptionId }: any, thunkAPI) => {
    try {
      toast.loading("account deletion in progress...", {
        position: "bottom-right",
      });

      let currentUser: any = firebaseAuth.currentUser;

      if (!currentUser) {
        toast.dismiss();
        toast.error("User not authenticated", {
          position: "bottom-right",
        });

        return thunkAPI.rejectWithValue({ error: "User not authenticated" });
      }

      const providerID = currentUser.providerData[0].providerId;

      switch (providerID) {
        case "password":
          const authCredential = EmailAuthProvider.credential(
            currentUser.email as string,
            password
          );

          await reauthenticateWithCredential(currentUser, authCredential);
          currentUser = firebaseAuth.currentUser;
          break;

        case "google.com":
          await reauthenticateWithPopup(currentUser, new GoogleAuthProvider());
          currentUser = firebaseAuth.currentUser;

          break;

        default:
          throw new Error(`${currentUser.providerId} is not supported`);
      }

      const uid = currentUser?.uid as string;

      if (subscriptionId) {
        await postData({
          url: "/api/cancel-subscription",
          data: { subscriptionId },
        });
      }

      await thunkAPI.dispatch(deleteUser(uid));
      await currentUser?.delete();

      toast.dismiss();
      toast.success("account delete successfully!", {
        position: "bottom-right",
      });
    } catch (error: any) {
      toast.dismiss();

      let currentUser = firebaseAuth.currentUser;

      if (error.code === "auth/requires-recent-login") {
        toast.error(
          `Please re-login with ${currentUser?.providerId}, and try again to delete account`,
          {
            position: "bottom-right",
          }
        );
      } else {
        console.error(error.message);
        toast.error(error.message, {
          position: "bottom-right",
        });
      }

      return thunkAPI.rejectWithValue({ error: error.message });
    }
  }
);

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    toggleLoginModal(state) {
      state.openLoginModal = !state.openLoginModal;
      return state;
    },
    toggleSignupModal(state) {
      state.openSignUpModal = !state.openSignUpModal;
      return state;
    },
  },
  extraReducers: {
    [signupUser.pending as any]: (state, action) => {
      state.status = "pending";
    },
    [signupUser.fulfilled as any]: (state, action) => {
      state.displayName = action.payload.displayName;
      state.email = action.payload.email;
      state.authenticated = true;
      state.status = "fulfilled";
      state.providerID = "auth";
    },
    [signupUser.rejected as any]: (state, action) => {
      state.error = action.error;
      state.status = "rejected";
    },
    [login.pending as any]: (state, action) => {
      state.status = "pending";
    },
    [login.fulfilled as any]: (state, action) => {
      state.displayName = action.payload.displayName;
      state.email = action.payload.email;
      state.authenticated = true;
      state.status = "fulfilled";
      state.providerID = "auth";
    },
    [login.rejected as any]: (state, action) => {
      state.error = action.error;
      state.status = "rejected";
    },
    [logout.pending as any]: (state, action) => {
      state.status = "pending";
    },
    [logout.fulfilled as any]: (state, action) => {
      state.email = initialState.email;
      state.status = "fulfilled";
      state.authenticated = false;
      state.displayName = initialState.displayName;
    },
    [logout.rejected as any]: (state, action) => {
      state.error = action.error;
      state.status = "rejected";
    },
    [loginFacebook.pending as any]: (state, action) => {
      state.status = "pending";
    },
    [loginFacebook.fulfilled as any]: (state, action) => {
      state.displayName = action.payload.displayName;
      state.email = action.payload.email;
      state.authenticated = true;
      state.status = "fulfilled";
      state.providerID = "facebook";
    },
    [loginFacebook.rejected as any]: (state, action) => {
      state.error = action.error;
      state.status = "rejected";
    },
    [loginGoogle.pending as any]: (state, action) => {
      state.status = "pending";
    },
    [loginGoogle.fulfilled as any]: (state, action) => {
      state.displayName = action.payload.displayName;
      state.email = action.payload.email;
      state.authenticated = true;
      state.status = "fulfilled";
      state.providerID = "google";
    },
    [loginGoogle.rejected as any]: (state, action) => {
      state.error = action.error;
      state.status = "rejected";
    },
    [authenticate.pending as any]: (state, action) => {
      state.status = "pending";
    },
    [authenticate.fulfilled as any]: (state, action) => {
      state.displayName = action.payload.displayName;
      state.email = action.payload.email;
      state.authenticated = true;
      state.status = "fulfilled";
    },
    [authenticate.rejected as any]: (state, action) => {
      state.error = action.error;
      state.status = "rejected";
    },
    [updateUserEmail.pending as any]: (state, action) => {
      state.status = "pending";
    },
    [updateUserEmail.fulfilled as any]: (state, action) => {
      state.email = action.payload.email;
      state.authenticated = true;
      state.status = "fulfilled";
    },
    [updateUserEmail.rejected as any]: (state, action) => {
      state.error = action.error;
      state.status = "rejected";
    },
    [updateUserDisplayName.pending as any]: (state, action) => {
      state.status = "pending";
    },
    [updateUserDisplayName.fulfilled as any]: (state, action) => {
      state.displayName = action.payload.displayName;
      state.authenticated = true;
      state.status = "fulfilled";
    },
    [updateUserDisplayName.rejected as any]: (state, action) => {
      state.error = action.error;
      state.status = "rejected";
    },
    [deleteUserAccount.pending as any]: (state, action) => {
      state.status = "pending";
    },
    [deleteUserAccount.fulfilled as any]: (state, action) => {
      state.email = initialState.email;
      state.status = "fulfilled";
      state.authenticated = false;
      state.displayName = initialState.displayName;
    },
    [deleteUserAccount.rejected as any]: (state, action) => {
      state.error = action.error;
      state.status = "rejected";
    },
  },
});

// Action creators are generated for each case reducer function
// export const { setAuth } = authSlice.actions;
export const { toggleLoginModal, toggleSignupModal } = authSlice.actions;
export default authSlice.reducer;
export const selectAuth = (state: RootState) => state;
export const loginModalState = (state: RootState) => state.auth.openLoginModal;
export const signupModalState = (state: RootState) =>
  state.auth.openSignUpModal;
