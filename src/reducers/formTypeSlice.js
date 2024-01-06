import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    formData:"",
    formSubmit: false,
    formType:"",
};

export const formTypeSlice = createSlice({
    name: "formtype",
    initialState,
    reducers: {
        formData: (state, { payload }) => {
            return { ...state, formData:payload }
        },
        formType: (state, { payload }) => {
            return { ...state, formType:payload }
        },
        formSubmited: (state, { payload }) => {
            return { ...state, formSubmit:payload }
        },
    },
});

export const { formData, formType, formSubmited } = formTypeSlice.actions;

export default formTypeSlice.reducer;
