import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getLanguage } from "../util/SiteUtil";
import { RootState } from "./store";

const initialState = {
    lang: getLanguage(),
}

export const languageSlice = createSlice({
    name: "language",
    initialState,
    reducers: {
        setLang: (state, action: PayloadAction<string>) => {
            state.lang = action.payload;
        }
    }
});

export const { setLang } = languageSlice.actions;

export default languageSlice.reducer;

export const selectLanguage = (state: RootState) => state.language;