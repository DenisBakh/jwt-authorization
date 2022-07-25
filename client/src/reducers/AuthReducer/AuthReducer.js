const LOGIN = 'LOGIN'
const REGISTRATION = 'REGISTRATION'
const SET_AUTH_LOADING = 'SET_AUTH_LOADING'
const SET_AUTH = 'SET_AUTH'

const initState = {
    isAuth: false,
    user: {},
    isLoading: false
}

export default function authReducer(state = initState, action) {
    switch (action.type) {
        case LOGIN:
            return {...state, user: action.payload}
            break
        case REGISTRATION:
            return {...state, user: action.payload}
            break
        case SET_AUTH_LOADING:
            return {...state, isLoading: action.payload}
            break
        case SET_AUTH:
            console.log(action)
            return {...state, isAuth: action.payload}
            break
        default:
            return state
    }
}

export const loginActionCreator = (user) => ({
    type: LOGIN,
    payload: user
})

export const registrationActionCreator = (email, password) => ({
    type: REGISTRATION,
    payload: {email, password}
})

export const setLoadingActionCreator = (isLoading) => ({
    type: SET_AUTH_LOADING,
    payload: isLoading
})

export const setAuthActionCreator = (isAuth) => ({
    type: SET_AUTH,
    payload: isAuth
})