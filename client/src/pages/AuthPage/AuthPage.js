import React, {useState} from 'react';
import {useDispatch} from "react-redux";

import {loginService, registrationService} from "../../services/authService";

const AuthPage = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const dispatch = useDispatch()

    return (
        <div>
            <label>
                Email:
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
            </label>
            <label>
                Password:
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
            </label>
            <button onClick={() => dispatch(loginService(email, password))}>Login</button>
            <button onClick={() => dispatch(registrationService(email, password))}>Registration</button>
        </div>
    );
};

export default AuthPage;