import React from "react";
import classes from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {
    let dialogElements = props.dialogs.map(elem => <DialogItem name={elem.name} id={elem.id} />);
    let messageElements = props.messages.map(elem => <Message message={elem.message} id={elem.id} />)

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