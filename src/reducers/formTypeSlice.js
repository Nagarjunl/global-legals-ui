import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    formData:"",
    formDataIdProof:"",
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
        formDataIdProof: (state, { payload }) => {
            return { ...state, formDataIdProof:payload }
        },
    },
});

export const { formData, formType, formSubmited, formDataIdProof } = formTypeSlice.actions;

export default formTypeSlice.reducer;
