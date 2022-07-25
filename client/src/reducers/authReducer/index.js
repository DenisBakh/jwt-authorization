import {createSlice} from "@reduxjs/toolkit";

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        user: {},
        isAuth: false,
        isLoading: false
    },
    reducers: {
        setUser: (state, action) => {
            state.user = action.payload
        },
        setLoading: (state, action) => {
            state.isLoading = action.payload
        },
        setAuth: (state, action) => {
            state.isAuth = action.payload
        }
    }
})

export default authSlice.reducer
export const {setUser, setLoading, setAuth} = authSlice.actions