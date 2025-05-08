import React from 'react';
import classes from './LoginForm.module.css';
import { Field, InjectedFormProps, reduxForm } from 'redux-form'
import { Input } from '../../common/FormsControls/FormsControls.tsx';
import { requiredField } from '../../../utils/validators/validators.ts';
import styles from '../../common/FormsControls/FormsControls.module.css';
import { LoginFormDataType } from './../Login.tsx';

type OwnPropsType = {
    captcha: string | null;
}

const LoginForm: React.FC<InjectedFormProps<LoginFormDataType, OwnPropsType> & OwnPropsType> = ({ handleSubmit, error, captcha }) => {
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
            { captcha && 
            <div>
                <img src={ captcha } alt="" />
                <Field 
                    type='text' 
                    name="captcha" 
                    id="captcha" 
                    component={ Input }
                    validate={ [requiredField] }
                />
            </div> 
             }
            <button>Отправить</button>
            <div className={styles.formSummaryError}>
                { error }
            </div>
        </form>
    )
};

export default reduxForm<LoginFormDataType, OwnPropsType>({ form: 'login' })(LoginForm);
