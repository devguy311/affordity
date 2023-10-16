import { initializeApp } from "firebase/app";
import { getFirestore, collection } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import firebaseConfig from "../config/firebase";

// init firebase app
const app = initializeApp(firebaseConfig);
// init services
export const db = getFirestore();
export const firebaseAuth = getAuth();
export const analytics =
  typeof window !== "undefined" ? getAnalytics(app) : null;

// collection ref
export const usersCollection = collection(db, "users");
