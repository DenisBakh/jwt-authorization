import {$apiWithAuth} from "../http";
import {setLoading, setUsers} from "../reducers/usersReducer";

export const getUsersService = () => async dispatch => {
    dispatch(setLoading(true))
    try {
        const response = await $apiWithAuth.get('/users')
        if (response.data) {
            dispatch(setUsers(response.data))
        }
    } catch (e) {
        console.log(e)
    }
    dispatch(setLoading(false))
}