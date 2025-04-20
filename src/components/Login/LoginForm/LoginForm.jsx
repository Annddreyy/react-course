import React from 'react';
import classes from './LoginForm.module.css';
import { Field, reduxForm } from 'redux-form'

const LoginForm = (props) => {
    return (
        <form className={ classes.form } onSubmit={ props.handleSubmit }>
            <label htmlFor="email">Логин:</label>
            <Field type='email' name="email" id="email" component={'input'} />
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
