import {
  doc,
  setDoc,
  getDoc,
  getDocs,
  updateDoc,
  deleteDoc,
  query,
  where,
} from "firebase/firestore";
import { User as FirebaseUser } from "firebase/auth";
import { usersCollection, db } from "../firebase/index";
import { IUser } from "../redux/user";

const createFirebaseUser = async (
  firebaseUser: FirebaseUser,
  getNotification = false,
  questionaries: string[]
) => {
  const user: IUser = {
    displayName: firebaseUser.displayName || "",
    email: firebaseUser.email || "",
    phoneNumber: firebaseUser.phoneNumber || "",
    photoURL: firebaseUser.photoURL || "",
    uid: firebaseUser.uid || "",
    getNotification: getNotification,
    questionaries: questionaries,
  };
  try {
    await setDoc(doc(usersCollection, user.uid), user);
    const dbUser = await getDoc(doc(usersCollection, user.uid));

    if (dbUser.exists()) {
      return dbUser.data();
    } else {
      throw new Error("Firebase user not created");
    }
  } catch (error) {
    throw error;
  }
};

const updateFirebaseUser = async (updateUser: IUser) => {
  try {
    const userRef = doc(usersCollection, updateUser.uid);
    await updateDoc(userRef, { ...updateUser });
    const dbUser = await getDoc(doc(usersCollection, updateUser.uid));
    if (dbUser.exists()) {
      return dbUser.data();
    } else {
      throw new Error("User wasn't updated in Firebase");
    }
  } catch (error) {
    throw error;
  }
};

const getUserByUid = async (userId: string) => {
  try {
    const dbUser = await getDoc(doc(usersCollection, userId));
    if (dbUser.exists()) {
      return dbUser.data();
    } else {
      throw new Error("User not in DB");
    }
  } catch (error) {
    throw error;
  }
};

const deleteUserData = async (userId: string) => {
  try {
    return await deleteDoc(doc(db, "users", userId));
  } catch (error: any) {
    throw new Error(error);
  }
};

const updateUserSubscriptionStatus = async (subscription: any) => {
  try {
    // get user by customerId
    const userQuery = query(
      usersCollection,
      where("customerId", "==", subscription.customer)
    );

    const querySnapshot = await getDocs(userQuery);

    if (querySnapshot.empty) {
      throw new Error("User not found");
    }

    let user;

    querySnapshot.forEach((doc) => {
      user = doc.data();
    });

    const userRef = doc(usersCollection, user.uid);

    await updateDoc(userRef, {
      subscription: {
        id: subscription.id,
        plan: subscription.plan.id,
        status: subscription.status,
      },
    });
  } catch (error: any) {
    throw new Error(error.message);
  }
};

export {
  getUserByUid,
  createFirebaseUser,
  updateFirebaseUser,
  deleteUserData,
  updateUserSubscriptionStatus,
};
