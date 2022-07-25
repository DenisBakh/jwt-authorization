import {createSlice} from "@reduxjs/toolkit";

const usersSlice = createSlice({
    name: 'users',
    initialState: {
        users: [],
        isLoading: false
    },
    reducers: {
        setUsers: (state, action) => {
            state.users = action.payload
        },
        setLoading: (state, action) => {
            state.isLoading = action.payload
        }
    }
})

export default usersSlice.reducer
export const {setUsers, setLoading} = usersSlice.actions