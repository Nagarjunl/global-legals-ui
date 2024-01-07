import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    superUser: false,
};

export const superUserSlice = createSlice({
    name: "superuser",
    initialState,
    reducers: {
        setSuperUser: (state, { payload }) => {
            return { ...state, superUser: payload }
        },
    },
});

export const { setSuperUser } = superUserSlice.actions;

export default superUserSlice.reducer;
