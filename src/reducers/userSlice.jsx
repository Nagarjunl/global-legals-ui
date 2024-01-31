import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    current_user: null,
};

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        currentUser: (state, { payload }) => {
            return { ...state, current_user: payload };
        },
        removeUser: (state) => {
            return { ...state, current_user: null }
        },

    },
});

export const { currentUser, removeUser } = userSlice.actions;

export default userSlice.reducer;
