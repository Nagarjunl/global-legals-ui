import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: null,
};

export const formTypeSlice = createSlice({
    name: "formtype",
    initialState,
    reducers: {
        currentForm: (state, { payload }) => (state = payload),
    },
});

export const { currentForm, } = formTypeSlice.actions;

export default formTypeSlice.reducer;
