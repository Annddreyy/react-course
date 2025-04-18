import React from "react";
import classes from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import { Navigate } from 'react-router-dom';

const Dialogs = (props) => {
    let state = props.messagesPage;

    let dialogElements = state.dialogs.map(elem => <DialogItem name={elem.name} id={elem.id} />);
    let messageElements = state.messages.map(elem => <Message message={elem.message} id={elem.id} />)
    
    const newMessageElement = React.createRef();

    if (!props.isAuth) {
        return (<Navigate to="/login" />)
    }

    const updateMessage = () => {
        const text = newMessageElement.current.value;
        props.updateMessage(text)
    }

    const addMessage = () => {
        if (props.messagesPage.newMessage) {
            props.addNewMessage();
        }
    }

    return (
        <div className={classes.dialogs}>
            <div className={classes['dialog-items']}>
                { dialogElements }
            </div>
            <div className={classes.messages}>
                <div className={classes.chat}>
                    { messageElements }
                </div>
                <textarea ref={newMessageElement} onChange={ updateMessage } value={ state.newMessage } />
                <input type="submit" value="Отправить" onClick={ addMessage } />
            </div>
        </div>
    )
}

export default Dialogs;