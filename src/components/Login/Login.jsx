import React from 'react';
import ReduxLoginForm from './LoginForm/LoginForm';
import classes from './Login.module.css';
import { Navigate } from 'react-router-dom';

const Login = ({ loginUserThunkCreator, isAuth }) => {
    const onSubmit = (formData) => {
        let { email, password, remember } = formData;
        remember ||= false;
        loginUserThunkCreator(email, password, remember);
    };

    if (isAuth) {
        return <Navigate to={'/profile'} />
    }
    
    return (
        <div>
            <h1 className={ classes.title }>Авторизация</h1>
            <ReduxLoginForm onSubmit={onSubmit} />
        </div>
    )
}

export default Login;