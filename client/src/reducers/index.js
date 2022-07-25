import {combineReducers} from "@reduxjs/toolkit";
import authSlice from './authReducer'
import usersSlice from './usersReducer'

export const rootReducer = combineReducers({
    authSlice,
    usersSlice
})