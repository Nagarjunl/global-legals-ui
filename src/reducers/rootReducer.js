import { combineReducers } from "@reduxjs/toolkit";

import { authApi } from '../services/authAPI'
import { userApi } from '../services/userAPI'
import { fileUploadApi } from '../services/fileUploadAPI';
import { stripeApi } from "../services/stripeAPI";
import { profileApi } from "../services/profileAPI";

import registerReducer from '../reducers/auth/registerSlice'
import authReducer from "../reducers/auth/authSlice";
import formTypeReducer from "../reducers/formTypeSlice";
import searchReducer from "../reducers/searchSlice";
import superUserReducer from "../reducers/superUserSlice";
import profileReducer from "./profileSlice";
import userReducer from "./userSlice";




const rootReducer = combineReducers({
    registeredMail: registerReducer,
    user: userReducer,
    auth: authReducer,
    formType: formTypeReducer,
    search: searchReducer,
    superUser: superUserReducer,
    profile: profileReducer,
    [authApi.reducerPath]: authApi.reducer,
    [userApi.reducerPath]: userApi.reducer,
    [fileUploadApi.reducerPath]: fileUploadApi.reducer,
    [stripeApi.reducerPath]: stripeApi.reducer,
    [profileApi.reducerPath]: profileApi.reducer,
});

export default rootReducer;