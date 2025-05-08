import React from 'react';
import ReduxLoginForm from './LoginForm/LoginForm.tsx';
import classes from './Login.module.css';
import { Navigate } from 'react-router-dom';

type PropsType = {
    captcha: string | null,
    isAuth: boolean,
    loginUserThunkCreator: (email: string, password: string, remember: boolean, captcha: string) => void
};

export type LoginFormDataType = {
    email: string,
    password: string,
    remember: false,
    captcha: string
};

const Login: React.FC<PropsType> = ({ isAuth, captcha, loginUserThunkCreator }) => {
    const onSubmit = ({ email, password, remember = false, captcha }: LoginFormDataType) => {
        loginUserThunkCreator(email, password, remember, captcha);
    };

    if (isAuth) {
        return <Navigate to={'/profile'} />
    }
    
    return (
        <div>
            <h1 className={ classes.title }>Авторизация</h1>
            <ReduxLoginForm onSubmit={ onSubmit } captcha={ captcha }  />
        </div>
    )
}

export default Login;