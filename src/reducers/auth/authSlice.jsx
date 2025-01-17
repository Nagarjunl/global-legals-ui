import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    access_token: null,
    refresh_token: null,
};

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        addTokens: (state, { payload }) => (state = payload),
        removeTokens: (state) => {
            return {
                ...state,
                access_token: null,
                refresh_token: null,
            }
        },
    },
});

export const { addTokens, removeTokens } = authSlice.actions;

export default authSlice.reducer;
