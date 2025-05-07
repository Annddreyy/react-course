import React from "react";
import classes from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import NewMessageForm from "./NewMessageForm/NewMessageForm";
import { DialogType, MessageType } from "../../types/types";

type PropsType = {
    dialogs: DialogType[],
    messages: MessageType[],
    newMessage: string | null,
    addNewMessage: (message: string) => void
};

type FormDataType = {
    'new-message': string
}

const Dialogs = ({ dialogs, messages, newMessage, addNewMessage }: PropsType) => {
    let dialogElements = dialogs.map(dialog => <DialogItem name={ dialog.name } id={ dialog.id } key={ dialog.id } />);
    let messageElements = messages.map(message => <Message message={ message.message} key={ message.id } />)

    const onSubmit = (formData: FormDataType) => {
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