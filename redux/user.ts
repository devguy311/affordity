import {
  createAsyncThunk,
  createSlice,
  SerializedError,
} from "@reduxjs/toolkit";
import {
  // signInWithPopup,
  // FacebookAuthProvider,
  // createUserWithEmailAndPassword,
  User as FirebaseUser,
  UserCredential,
} from "firebase/auth";
import {
  createFirebaseUser,
  getUserByUid,
  updateFirebaseUser,
  deleteUserData,
} from "../helpers/databaseHelper";

// import { ComparisonType as IComparisonType } from "../components/livingcostindicator/type";
// import { PurchaseRuleType } from "../components/carpurchaserule/type";
import { RootState } from "./store";

export type IComparisonType = {
  country: string;
  state: string;
  age: string;
  gender: string;
  income: string;
  carMaintenance: string;
  houseMaintenance: string;
  savings: string;
  health: string;
  clothing: string;
  houseRent: string;
  gasAndElectricity: string;
  hotelsAndRestaurants: string;
  holidays: string;
  food: string;
  currency: string;
};

export type PurchaseRuleType = {
  revenue: string;
  savings: string;
  startCapital: string;
  purchaseDate: string | Date;
  leasePayment: string;
  carPrice: string;
};

export interface IUserFinancesDB {
  revenue: number;
  price: number;
  saving?: number;
  startCapital?: number;
  loan?: number;
  interestRate?: number;
  maintenance?: number;
  purchaseDate?: string;
  startDate?: string;
  loanTerm?: number | null;
  insurance?: number;
  emergencySaving?: number;
  financingAdviceType?: string;
  monthlyPayment?: string | number;
  downPayment?: string | number;
  leasingLength?: number | null;
  amountInValue?: boolean;
  insuranceInValue?: boolean;
  interestInValue?: boolean;
  maintenanceInValue?: boolean;
  downPaymentInValue?: boolean;
}

export interface IUserInvestmentViewDB {
  targetAmount: string;
  riskType: string;
  investmentDuration: string;
  importanceType: string;
  initialDeposit: string;
  monthlyDeposit: string;
}

export interface IUserDetailInvestmentViewDB {
  goals: {
    goal: number;
    data: {
      initialDeposit: string;
      monthlyDeposit: string;
      investmentDuration: string;
      targetAmount: string;
      liquidity: string;
    };
  }[];
  risks: {
    financialRisk: string;
    riskyAssets: string;
    investmentConcept: string;
    investmentProduct: string;
    stockMarket: string;
    action: string;
  };
}

export interface IUserRetirementViewDB {
  age: number[];
  saveAmount: string;
  saveEachMonth: string;
  customSaveAmount: string;
  customSaveEachMonth: string;
}

export interface IUserProfile {
  salary: string;
  age: string;
  savings: string;
  country: string;
  capital: string;
  prefferedCurrency: string;
  gender: string;
}

export interface IUserRealestateView {
  city: string;
  ownership_status: string;
  income: string;
}

export interface IUserSubscription {
  id: string;
  plan: string;
  status: string;
}

export interface IUser {
  displayName: string;
  email: string;
  phoneNumber?: string;
  photoURL?: string;
  uid: string;
  customerId?: string;
  powensConnection?: string;
  getNotification?: boolean;
  questionaries?: string[];
  finances?: IUserFinancesDB;
  investmentView?: IUserInvestmentViewDB;
  retirementView?: IUserRetirementViewDB;
  comparatorView?: IComparisonType;
  carPurchaseRule?: PurchaseRuleType;
  profileData?: IUserProfile;
  realestateView?: IUserRealestateView;
  detailInvestmentView?: IUserDetailInvestmentViewDB;
  subscription?: IUserSubscription;
}
export interface IUserState extends IUser {
  error?: SerializedError;
  status: "pending" | "fulfilled" | "rejected";
}

const initialState: IUserState = {
  displayName: "",
  email: "",
  phoneNumber: "",
  photoURL: "",
  uid: "",
  status: "pending",
};

export const createUser = createAsyncThunk(
  "user/createUser",
  async (firebaseUser: FirebaseUser) => {
    try {
      return await createFirebaseUser(
        firebaseUser,
        // @ts-ignore
        firebaseUser.getNotification,
        // @ts-ignore
        firebaseUser.questionaries
      );
    } catch (error) {
      throw error;
    }
  }
);

export const updateUser = createAsyncThunk(
  "user/updateUser",
  async (user: IUser) => {
    try {
      return await updateFirebaseUser(user);
    } catch (error) {
      throw error;
    }
  }
);

export const getUser = createAsyncThunk(
  "user/getUser",
  async (userId: string) => {
    try {
      return await getUserByUid(userId);
    } catch (error) {
      throw error;
    }
  }
);

export const deleteUser = createAsyncThunk(
  "user/deleteUser",
  async (userId: string) => {
    try {
      return await deleteUserData(userId);
    } catch (error) {
      throw error;
    }
  }
);

export const getOrCreateFirebaseUser = createAsyncThunk(
  "user/getOrCreateFirebaseUser",
  async (userCredential: UserCredential, thunkAPI) => {
    try {
      const dbUser = await getUserByUid(userCredential.user.uid);
      return dbUser;
    } catch (error: any) {
      const parsedError = error.message ? error.message : error;

      if (
        parsedError.includes("Firebase user not created") ||
        parsedError.includes("User not in DB")
      ) {
        const dbCreatedUser = await thunkAPI.dispatch(
          createUser(userCredential.user)
        );
        return dbCreatedUser;
      } else {
        throw error;
      }
    }
  }
);

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    clearUser(state) {
      state = initialState;
    },
  },
  extraReducers: {
    [createUser.pending as any]: (state, action) => {
      state.status = "pending";
    },
    [createUser.fulfilled as any]: (state, action) => {
      state.displayName = action.payload.displayName;
      state.email = action.payload.email;
      state.phoneNumber = action.payload.phoneNumber;
      state.photoURL = action.payload.photoURL;
      state.uid = action.payload.uid;
      state.getNotification = action.payload.getNotification;
      state.questionaries = action.payload.questionaries;
      state.status = "fulfilled";
    },
    [createUser.rejected as any]: (state, action) => {
      state.error = action.error;
      state.status = "rejected";
    },
    [updateUser.pending as any]: (state, action) => {
      state.status = "pending";
    },
    [updateUser.fulfilled as any]: (state, action) => {
      state.displayName = action.payload.displayName;
      state.email = action.payload.email;
      state.phoneNumber = action.payload.phoneNumber;
      state.photoURL = action.payload.photoURL;
      state.uid = action.payload.uid;
      if (action.payload.getNotification) {
        state.getNotification = action.payload.getNotification;
      }
      if (action.payload.questionaries) {
        state.questionaries = action.payload.questionaries;
      }
      if (action.payload.finances) {
        state.finances = action.payload.finances;
      }
      if (action.payload.investmentView) {
        state.investmentView = action.payload.investmentView;
      }
      if (action.payload.retirementView) {
        state.retirementView = action.payload.retirementView;
      }
      if (action.payload.comparatorView) {
        state.comparatorView = action.payload.comparatorView;
      }
      if (action.payload.carPurchaseRule) {
        state.carPurchaseRule = action.payload.carPurchaseRule;
      }
      if (action.payload.profileData) {
        state.profileData = action.payload.profileData;
      }
      if (action.payload.realestateView) {
        state.realestateView = action.payload.realestateView;
      }
      if (action.payload.detailInvestmentView) {
        state.detailInvestmentView = action.payload.detailInvestmentView;
      }
      if (action.payload.subscription) {
        state.subscription = action.payload.subscription;
      }
      if (action.payload.customerId) {
        state.customerId = action.payload.customerId;
      }
      if (action.payload.powensConnection) {
        state.powensConnection = action.payload.powensConnection;
      }

      state.status = "fulfilled";
    },
    [updateUser.rejected as any]: (state, action) => {
      state.error = action.error;
      state.status = "rejected";
    },
    [getUser.pending as any]: (state, action) => {
      state.status = "pending";
    },
    [getUser.fulfilled as any]: (state, action) => {
      state.displayName = action.payload.displayName;
      state.email = action.payload.email;
      state.phoneNumber = action.payload.phoneNumber;
      state.photoURL = action.payload.photoURL;
      state.uid = action.payload.uid;

      if (action.payload.getNotification) {
        state.getNotification = action.payload.getNotification;
      }
      if (action.payload.questionaries) {
        state.questionaries = action.payload.questionaries;
      }
      if (action.payload.finances) {
        state.finances = action.payload.finances;
      }
      if (action.payload.investmentView) {
        state.investmentView = action.payload.investmentView;
      }
      if (action.payload.retirementView) {
        state.retirementView = action.payload.retirementView;
      }
      if (action.payload.comparatorView) {
        state.comparatorView = action.payload.comparatorView;
      }
      if (action.payload.carPurchaseRule) {
        state.carPurchaseRule = action.payload.carPurchaseRule;
      }
      if (action.payload.profileData) {
        state.profileData = action.payload.profileData;
      }
      if (action.payload.realestateView) {
        state.realestateView = action.payload.realestateView;
      }
      if (action.payload.detailInvestmentView) {
        state.detailInvestmentView = action.payload.detailInvestmentView;
      }
      if (action.payload.subscription) {
        state.subscription = action.payload.subscription;
      }
      if (action.payload.customerId) {
        state.customerId = action.payload.customerId;
      }
      if (action.payload.powensConnection) {
        state.powensConnection = action.payload.powensConnection;
      }

      state.status = "fulfilled";
    },
    [getUser.rejected as any]: (state, action) => {
      state.error = action.error;
      state.status = "rejected";
    },
    [deleteUser.pending as any]: (state, action) => {
      state.status = "pending";
    },
    [deleteUser.fulfilled as any]: (state, action) => {
      state.displayName = "";
      state.email = "";
      state.phoneNumber = "";
      state.photoURL = "";
      state.uid = "";
      state.getNotification = false;
      state.questionaries = [];
      state.status = "fulfilled";
    },
    [deleteUser.rejected as any]: (state, action) => {
      state.error = action.error;
      state.status = "rejected";
    },
  },
});

export default userSlice.reducer;
export const { clearUser } = userSlice.actions;

export const selectUser = (state: RootState) => state;
