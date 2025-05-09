import React from 'react';
import classes from './NewMessageForm.module.css';
import { Field, InjectedFormProps, reduxForm } from 'redux-form';
import { Textarea } from '../../common/FormsControls/FormsControls';
import { maxLenghtCreator, requiredField } from '../../../utils/validators/validators';
import { NewMessageFormDataType} from '../Dialogs';

const maxLenght1000 = maxLenghtCreator(1000);

type OwnPropertyType = {
    message: string | null
}

const NewMessageForm: React.FC<InjectedFormProps<NewMessageFormDataType, OwnPropertyType> & OwnPropertyType> = ({ handleSubmit, message }) => {
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

const ReduxNewMessageForm = reduxForm<NewMessageFormDataType, OwnPropertyType>({ form: 'new-message-form' })(NewMessageForm);

export default ReduxNewMessageForm
