import React, {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {loginService, logoutService, registrationService} from "../../services/authService";
import {getUsersService} from "../../services/userService";

const AuthPage = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const isAuth = useSelector(state => state.AuthReducer.isAuth)
    const users = useSelector(state => state.UsersReducer.users)
    const dispatch = useDispatch()

    const onLoginPress = () => {
        dispatch(loginService(email, password))
    }

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') onLoginPress()
    }

    if (isAuth) {
        return (
            <>
                <button onClick={() => dispatch(logoutService())}>Выход</button>
                <button onClick={() => dispatch(getUsersService())}>Получить пользователей</button>
                {users.map(user=>{
                    return (
                        <div key={user.id}>{user.email}</div>
                    )
                })}
            </>
        )
    }

    return (
        <>
            <label>
                Email:
                <input
                    type="text"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
            </label>
            <label>
                Password:
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    onKeyDown={handleKeyDown}
                />
            </label>
            <button onClick={onLoginPress}>Вход</button>
            <button onClick={() => dispatch(registrationService(email, password))}>Регистрация</button>
        </>
    );
};

export default AuthPage;