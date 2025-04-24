import React from 'react';
import classes from './NewMessageForm.module.css';
import { Field, reduxForm } from 'redux-form';
import { Textarea } from '../../common/FormsControls/FormsControls';
import { maxLenghtCreator, requiredField } from '../../../utils/validators/validators';

const maxLenght1000 = maxLenghtCreator(1000);

const NewMessageForm = ({ handleSubmit, message }) => {
    return (
        <form onSubmit={ handleSubmit } className={ classes.form } >
            <Field 
                component={ Textarea } 
                name='new-message' 
                value={ message } 
                validate={[requiredField, maxLenght1000]}
            />
            <button>Отправить</button>
        </form>
    )
};

const ReduxNewMessageForm = reduxForm({ form: 'new-message-form' })(NewMessageForm);

export default ReduxNewMessageForm
