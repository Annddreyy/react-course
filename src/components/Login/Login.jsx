import React from 'react';
import ReduxLoginForm from './LoginForm/LoginForm';
import classes from './Login.module.css';

const Login = (props) => {
    const onSubmit = (formData) => {
        console.log('Данные формы:', formData);
    };
    return (
        <div>
            <h1 className={ classes.title }>Логин</h1>
            <ReduxLoginForm onSubmit={onSubmit} />
        </div>
    )
}

export default Login;