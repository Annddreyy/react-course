import React from 'react';
import classes from './LoginForm.module.css';
import { Field, reduxForm } from 'redux-form'

const LoginForm = (props) => {
    return (
        <form className={ classes.form } onSubmit={ props.handleSubmit }>
            <label htmlFor="login">Логин:</label>
            <Field type="text" name="login" id="login" component={'input'} />
            <label htmlFor="password">Пароль</label>
            <Field type="password" name="password" id="password" component={'input'} />
            <div>
                <Field type="checkbox" name="remember" id="remember" component={'input'} />
                Запомнить меня
            </div>
            <button>Отправить</button>
        </form>
    )
};

const ReduxLoginForm = reduxForm({ form: 'login' })(LoginForm);

export default ReduxLoginForm;
