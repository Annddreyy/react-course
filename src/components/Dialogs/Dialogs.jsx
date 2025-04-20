import React from "react";
import classes from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import NewMessageForm from "./NewMessageForm/NewMessageForm";

const Dialogs = (props) => {
    let dialogElements = props.messagesPage.dialogs.map(elem => <DialogItem name={elem.name} id={elem.id} />);
    let messageElements = props.messagesPage.messages.map(elem => <Message message={elem.message} id={elem.id} />)

    const onSubmit = (formData) => {
        props.addNewMessage(formData['new-message']);
    };

    return (
        <div className={classes.dialogs}>
            <div className={classes['dialog-items']}>
                { dialogElements }
            </div>
            <div className={classes.messages}>
                <div className={classes.chat}>
                    { messageElements }
                </div>
                <NewMessageForm onSubmit={ onSubmit } message={ props.messagesPage.newMessage } />
            </div>
        </div>
    )
}

export default Dialogs;