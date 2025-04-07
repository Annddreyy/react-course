import React from "react";
import classes from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = () => {
    let dialogsData = [
        { id: 1, name: 'Andrey' },
        { id: 2, name: 'Katya' },
        { id: 3, name: 'Ivan' },
        { id: 4, name: 'Pete' },
        { id: 5, name: 'Petr' }
    ]

    let dialogElements = dialogsData.map(elem => <DialogItem name={elem.name} id={elem.id} />);

    let messagesData = [
        { id: 1, message: 'Hi' },
        { id: 2, message: 'Hello!' },
        { id: 3, message: 'How are you?' },
        { id: 4, message: 'All ok' },
        { id: 5, message: 'Thank you' }
    ]

    let messageElements = messagesData.map(elem => <Message message={elem.message} id={elem.id} />)

    return (
        <div className={classes.dialogs}>
            <div className={classes['dialog-items']}>
                { dialogElements }
            </div>
            <div className={classes.messages}>
                { messageElements }
            </div>
        </div>
    )
}

export default Dialogs;