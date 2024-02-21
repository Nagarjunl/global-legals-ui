import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    people: "",
    location: "",
    ratings: "",
    dateRange: null,
    profession: null,
    keyword: "",
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
        setProfession: (state, { payload }) => {
            console.log(`setProfession`, payload);
            return {
                ...state, profession: payload
            }
        },
        setDateRange: (state, { payload }) => {
            return {
                ...state, dateRange: payload
            }
        },
        setKeyword: (state, { payload }) => {
            return {
                ...state, keyword: payload
            }
        },
    },
});

export const { setPeople, setLocation, setRatings, setDateRange, setProfession, setKeyword } = searchSlice.actions;

export default searchSlice.reducer;
