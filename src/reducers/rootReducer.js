import { combineReducers } from "@reduxjs/toolkit";
import registerReducer from '../reducers/auth/registerSlice'
import { authApi } from '../services/authAPI'
import { userApi } from '../services/userAPI'
import authReducer from "../reducers/auth/authSlice";
import userReducer from "./useSlice";

const rootReducer = combineReducers({
    registeredMail: registerReducer,
    user: userReducer,
    auth: authReducer,
    [authApi.reducerPath]: authApi.reducer,
    [userApi.reducerPath]: userApi.reducer,
});

export default rootReducer;