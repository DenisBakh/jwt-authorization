import {loginActionCreator, setAuthActionCreator, setLoadingActionCreator as setAuthLoading} from "../reducers/AuthReducer/AuthReducer";
import {$api, $apiWithAuth} from "../http";
import {setUsersActionCreator} from "../reducers/UsersReducer/UsersReducer";

export const loginService = (email, password) => async (dispatch) => {
    dispatch(setAuthLoading(true))
    try {
        const response = await $apiWithAuth.post('/login', {email, password})
        if (response.data) {
            console.log("response login", response.data)
            dispatch(setAuthActionCreator(true))
            dispatch(loginActionCreator(response.data.user))
            localStorage.setItem('token', response.data.accessToken)
        }
    } catch (e) {
        console.log(e.response?.data?.message)
    }
    dispatch(setAuthLoading(false))
}

export const logoutService = () => async (dispatch) => {
    dispatch(setAuthLoading(true))
    try {
        const response = await $apiWithAuth.post('/logout')
        if (response.data) {
            console.log("response logout", response.data)
            dispatch(loginActionCreator({}))
            dispatch(setAuthActionCreator(false))
            dispatch(setUsersActionCreator([]))
            localStorage.removeItem('token')
        }
    } catch (e) {
        console.log(e.response?.data?.message)
    }
    dispatch(setAuthLoading(false))
}

export const registrationService = (email, password) => async (dispatch) => {
    dispatch(setAuthLoading(true))
    try {
        const response = await $apiWithAuth.post('/registration', {email, password})
        if (response.data) {
            console.log("response reg", response.data)
            dispatch(loginActionCreator(response.data.user))
            dispatch(setAuthActionCreator(true))
            localStorage.setItem('token', response.data.accessToken)
        }
    } catch (e) {
        console.log(e.response?.data?.message)
    }
    dispatch(setAuthLoading(false))
}

export const refreshAuthService = () => async (dispatch) => {
    dispatch(setAuthLoading(true))
    try {
        const response = await $api.get('/refresh')
        if (response.data) {
            console.log("refresh reg", response.data)
            dispatch(setAuthActionCreator(true))
            localStorage.setItem('token', response.data.accessToken)
        }
    } catch (e) {
        console.log(e.response?.data?.message)
    }
    dispatch(setAuthLoading(false))
}