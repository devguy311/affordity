import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import { firestoreReducer } from "redux-firestore";
import { firebaseReducer } from "react-redux-firebase";
import languageReducer from "./language";
import userReducer from "./user";
import authReducer from "./auth";

export const store = configureStore({
    reducer: {
        auth: authReducer,
        language: languageReducer,
        user: userReducer,
        firestore: firestoreReducer,
        firebase: firebaseReducer,
    },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    Action<string>
>;
