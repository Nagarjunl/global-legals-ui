import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    people: "",
    location: "",
    ratings: "",
};

export const searchSlice = createSlice({
    name: "search",
    initialState,
    reducers: {
        setPeople: (state, { payload }) => {
            return {
                ...state, people: payload
            }
        },
        setLocation: (state, { payload }) => {
            return {
                ...state, location: payload
            }
        },
        setRatings: (state, { payload }) => {
            return {
                ...state, ratings: payload
            }
        },
        // formType: (state, { payload }) => {
        //     return { ...state, formType: payload }
        // },
        // formSubmited: (state, { payload }) => {
        //     return { ...state, formSubmited: payload }
        // }
    },
});

export const { setPeople, setLocation, setRatings } = searchSlice.actions;

export default searchSlice.reducer;
