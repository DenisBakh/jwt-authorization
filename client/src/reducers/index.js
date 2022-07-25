import {combineReducers} from "redux";
import AuthReducer from './AuthReducer/AuthReducer'
import UsersReducer from './UsersReducer/UsersReducer'

const rootReducer = combineReducers({
    AuthReducer,
    UsersReducer
})

export default rootReducer