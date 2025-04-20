import React from 'react';
import ReduxLoginForm from './LoginForm/LoginForm';
import classes from './Login.module.css';

const Login = (props) => {
    const onSubmit = (formData) => {
        let { email, password, remember } = formData;
        remember ||= false;
        props.loginUserThunkCreator(email, password, remember);
    };
    
    return (
        <div>
            <h1 className={ classes.title }>Авторизация</h1>
            <ReduxLoginForm onSubmit={onSubmit} />
        </div>
    )
}

export default Login;