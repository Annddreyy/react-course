import React from 'react';
import classes from './NewMessageForm.module.css';
import { Field, reduxForm } from 'redux-form';

const NewMessageForm = (props) => {
    return (
        <form onSubmit={ props.handleSubmit } className={ classes.form } >
            <Field component={'input'} name='new-message' value={ props.message } />
            <button>Отправить</button>
        </form>
    )
};

const ReduxNewMessageForm = reduxForm({ form: 'new-message-form' })(NewMessageForm);

export default ReduxNewMessageForm
