import React from 'react';
import ReduxLoginForm from './LoginForm/LoginForm';
import classes from './Login.module.css';
import { Navigate } from 'react-router-dom';

const Login = ({ loginUserThunkCreator, isAuth, captcha }) => {
    const onSubmit = ({ email, password, remember, captcha }) => {
        remember ||= false;
        loginUserThunkCreator(email, password, remember, captcha);
    };

    if (isAuth) {
        return <Navigate to={'/profile'} />
    }
    
    return (
        <div>
            <h1 className={ classes.title }>Авторизация</h1>
            <ReduxLoginForm onSubmit={onSubmit} captcha={ captcha }  />
        </div>
    )
}

export default Login;