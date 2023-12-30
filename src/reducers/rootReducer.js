import { combineReducers } from "@reduxjs/toolkit";
import registerReducer from '../reducers/auth/registerSlice'
import { authApi } from '../services/authAPI'
import authReducer from "../reducers/auth/authSlice";
import userReducer from "./useSlice";

const rootReducer = combineReducers({
    registeredMail: registerReducer,
    user: userReducer,
    auth: authReducer,
    [authApi.reducerPath]: authApi.reducer,
});

export default rootReducer;