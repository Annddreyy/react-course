import React from "react";
import classes from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {
    let dialogElements = props.state.dialogs.map(elem => <DialogItem name={elem.name} id={elem.id} />);
    let messageElements = props.state.messages.map(elem => <Message message={elem.message} id={elem.id} />)
    const newMessageElement = React.createRef();
    const addMessage = () => {
        const text = newMessageElement.current.value;
        let action = '';
    }
    return (
        <div className={classes.dialogs}>
            <div className={classes['dialog-items']}>
                { dialogElements }
            </div>
            <div className={classes.messages}>
                { messageElements }
                <input type="text" ref={newMessageElement} />
                <input type="submit" value="Отправить" onClick={ addMessage }/>
            </div>
        </div>
    )
}

export default Dialogs;