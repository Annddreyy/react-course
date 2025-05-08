import React from "react";
import classes from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem.tsx";
import Message from "./Message/Message.tsx";
import NewMessageForm from "./NewMessageForm/NewMessageForm.tsx";
import { DialogType, MessageType } from "../../types/types";

type PropsType = {
    dialogs: DialogType[],
    messages: MessageType[],
    newMessage: string | null,
    addNewMessage: (message: string) => void
};

export type NewMessageFormDataType = {
    'new-message': string
}

const Dialogs: React.FC<PropsType> = ({ dialogs, messages, newMessage, addNewMessage }) => {
    let dialogElements = dialogs.map(dialog => <DialogItem name={ dialog.name } id={ dialog.id } key={ dialog.id } />);
    let messageElements = messages.map(message => <Message message={ message.message} key={ message.id } />)

    const onSubmit = (formData: NewMessageFormDataType) => {
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