import React from "react";
import classes from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = () => {
    return (
        <div className={classes.dialogs}>
            <div className={classes['dialog-items']}>
                <DialogItem name="Andrey" id="1" />
                <DialogItem name="Katya" id="2" />
                <DialogItem name="Ivan" id="3" />
                <DialogItem name="Pete" id="4" />
                <DialogItem name="Petr" id="5" />
            </div>
            <div className={classes.messages}>
                <Message message="How are you?" />
                <Message message="Hello" />
                <Message message="All cool" />
            </div>
        </div>
    )
}

export default Dialogs;