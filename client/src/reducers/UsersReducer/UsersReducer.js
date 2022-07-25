const SET_USERS = 'GET_USERS'
const SET_USERS_LOADING = 'SET_USERS_LOADING'

const initState = {
    users: [],
    isLoading: false
}

export default function usersReducer(state = initState, action) {
    switch (action.type) {
        case SET_USERS:
            return {...state, users: action.payload}
            break
        case SET_USERS_LOADING:
            return {...state, isLoading: action.payload}
            break
        default:
            return state
    }
}

export const setUsersActionCreator = (users) => ({
    type: SET_USERS,
    payload: users
})

export const setLoadingActionCreator = (isLoading) => ({
    type: SET_USERS_LOADING,
    payload: isLoading
})

