import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    email: "",
    resetMail: "",
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
        setResetMail: (state, action) => {
            state.resetMail = action.payload
        },
        clearEmail: (state) => {
            return {
                ...state,
                email: "",
                resetMail: "",
                otp: "",
            }
        }
    },
})

// Action creators are generated for each case reducer function
export const { getEmail, clearEmail, getOtp, setResetMail } = registerSlice.actions

export default registerSlice.reducer