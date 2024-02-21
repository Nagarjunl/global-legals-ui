import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    profileUser: {},
    profileViews: [],
    chartData: [],
};

export const profileSlice = createSlice({
    name: "profile",
    initialState,
    reducers: {
        addProfileViewCount: (state, { payload }) => {
            state.profileViews.push(payload);
        },
        addProfileUser: (state, { payload }) => {
            return { ...state, profileUser: payload};
        },
        addChartData: (state, { payload }) => {
            return { ...state, chartData: payload};
        },
        removeProfileData: (state) => {
            return {
                ...state,
                profileUser: {},
                profileViews: [],
                chartData: [],
            };

        }
    },
});

export const { addProfileViewCount, addProfileUser, addChartData, removeProfileData } = profileSlice.actions;

export default profileSlice.reducer;
