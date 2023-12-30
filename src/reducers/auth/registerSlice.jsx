import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    email: "",
    pwResetMail: "",
    otp: "",
}

export const registerSlice = createSlice({
    name: 'register',
    initialState,
    reducers: {
        getEmail: (state, action) => {
            state.email = action.payload
        },
        getOtp: (state, action) => {
            state.otp = action.payload
        },
        getpwResetMail: (state, action) => {
            state.pwResetMail = action.payload
        },
        clearEmail: (state) => (state = { email: "", otp: "", pwResetMail: "", })
    },
})

// Action creators are generated for each case reducer function
export const { getEmail, clearEmail, getOtp, getpwResetMail } = registerSlice.actions

export default registerSlice.reducer