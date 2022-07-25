import {setAuth, setLoading, setUser} from "../reducers/authReducer";
import {$api, $apiWithAuth} from "../http";

export const loginService = (email, password) => async dispatch => {
    dispatch(setLoading(true))
    try {
        const response = await $apiWithAuth.post('/login', {email, password})
        if (response.data) {
            dispatch(setUser(response.data.user))
            localStorage.setItem('token', response.data.accessToken)
            dispatch(setAuth(true))
        }
    } catch (e) {
        console.log(e)
    }
    dispatch(setLoading(false))
}

export const registrationService = (email, password) => async dispatch => {
    dispatch(setLoading(true))
    try {
        const response = await $apiWithAuth.post('/registration', {email, password})
        if (response.data) {
            dispatch(setUser(response.data.user))
            localStorage.setItem('token', response.data.accessToken)
            dispatch(setAuth(true))
        }
    } catch (e) {
        console.log(e)
    }
    dispatch(setLoading(false))
}

export const logoutService = () => async dispatch => {
    dispatch(setLoading(true))
    try {
        const response = await $apiWithAuth.post('/logout')
        if (response.data) {
            dispatch(setUser({}))
            localStorage.removeItem('token')
            dispatch(setAuth(false))
        }
    } catch (e) {
        console.log(e)
    }
    dispatch(setLoading(false))
}

export const refreshService = () => async dispatch => {
    dispatch(setLoading(true))
    try {
        const response = await $api.get('/refresh')
        if (response.data) {
            dispatch(setUser(response.data.user))
            localStorage.setItem('token', response.data.accessToken)
            dispatch(setAuth(true))
        }
    } catch (e) {
        console.log(e)
    }
    dispatch(setLoading(false))
}