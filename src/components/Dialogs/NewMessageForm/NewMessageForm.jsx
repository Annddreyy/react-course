import React from 'react';
import classes from './NewMessageForm.module.css';
import { Field, reduxForm } from 'redux-form';

const NewMessageForm = (props) => {
    const newMessageElement = React.createRef();

    const updateMessage = () => {
        const text = newMessageElement.current.value;
        props.updateMessage(text)
    };

    const addMessage = () => {
        if (props.messagesPage.newMessage) {
            props.addNewMessage();
        }
    };

    return (
        <form onSubmit={ props.handleSubmit }>
            <Field component={'input'} ref={newMessageElement} onChange={ updateMessage } value={ props.messagesPage.newMessage } />
            <button onClick={ addMessage }>Отправить</button>
        </form>
    )
};

const ReduxNewMessageForm = reduxForm({ form: 'new-message-form' })(NewMessageForm);

export default ReduxNewMessageForm
