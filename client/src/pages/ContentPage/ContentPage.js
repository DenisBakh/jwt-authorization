import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {logoutService} from "../../services/authService";
import {getUsersService} from "../../services/usersService";
import Loading from "../../components/Loading/Loading";

const ContentPage = () => {
    const dispatch = useDispatch()
    const {users, isLoading} = useSelector(state => state.usersSlice)

    return (
        <div>
            <button onClick={() => dispatch(logoutService())}>Logout</button>
            <button onClick={() => dispatch(getUsersService())}>Get Users</button>
            {isLoading ? <Loading/> :
                (
                    <ul>
                        {users.map(user => {
                            return (
                                <li key={user.id}>{user.email}</li>
                            )
                        })}
                    </ul>
                )
            }

        </div>
    );
};

export default ContentPage;