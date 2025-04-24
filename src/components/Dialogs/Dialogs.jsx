import React from "react";
import classes from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import NewMessageForm from "./NewMessageForm/NewMessageForm";

const Dialogs = ({ dialogs, messages, newMessage, addNewMessage }) => {
    debugger;
    let dialogElements = dialogs.map(elem => <DialogItem name={elem.name} id={elem.id} />);
    let messageElements = messages.map(elem => <Message message={elem.message} id={elem.id} />)

    const onSubmit = (formData) => {
        addNewMessage(formData['new-message']);
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
                <NewMessageForm onSubmit={ onSubmit } message={ newMessage } />
            </div>
        </div>
    )
}

export default Dialogs;