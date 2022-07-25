import {$apiWithAuth} from "../http";
import {setUsersActionCreator, setLoadingActionCreator} from "../reducers/UsersReducer/UsersReducer";

export const getUsersService = () => async (dispatch) => {
    dispatch(setLoadingActionCreator(true))
    try {
        const response = await $apiWithAuth.get('/users')
        if (response.data) {
            console.log("response users", response.data)
            dispatch(setUsersActionCreator(response.data))
        }
    } catch (e) {
        console.log(e.response?.data?.message)
    }
    dispatch(setLoadingActionCreator(false))
}