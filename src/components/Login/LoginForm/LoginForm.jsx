import React from 'react';
import classes from './LoginForm.module.css';
import { Field, reduxForm } from 'redux-form'
import { Input } from '../../common/FormsControls/FormsControls';
import { requiredField } from '../../../utils/validators/validators';
import styles from '../../common/FormsControls/FormsControls.module.css'

const LoginForm = ({ handleSubmit, error }) => {
    return (
        <form className={ classes.form } onSubmit={ handleSubmit }>
            <label htmlFor="email">Логин:</label>
            <Field 
                type='email' 
                name="email" 
                id="email" 
                component={ Input }
                validate={[requiredField]}
            />
            <label htmlFor="password">Пароль</label>
            <Field 
                type="password" 
                name="password" 
                id="password" 
                component={ Input } 
                validate={[requiredField]}
            />
            <div>
                <Field 
                    type="checkbox" 
                    name="remember" 
                    id="remember" 
                    component={ Input } 
                    validate={[requiredField]}
                />
                Запомнить меня
            </div>
            <button>Отправить</button>
            <div className={styles.formSummaryError}>
                { error }
            </div>
        </form>
    )
};

const ReduxLoginForm = reduxForm({ form: 'login' })(LoginForm);

export default ReduxLoginForm;
