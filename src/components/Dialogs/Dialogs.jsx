import React from "react";
import classes from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import { addNewMessageActionCreator, updateMessageActionCreator } from "../../redux/messagesReducer";

const Dialogs = (props) => {
    let dialogElements = props.state.dialogs.map(elem => <DialogItem name={elem.name} id={elem.id} />);
    let messageElements = props.state.messages.map(elem => <Message message={elem.message} id={elem.id} />)
    
    const newMessageElement = React.createRef();

    const updateMessage = () => {
        const text = newMessageElement.current.value;
        let action = updateMessageActionCreator(text);
        props.dispatch(action);
    }

    const addMessage = () => {
        const text = newMessageElement.current.value;
        let action = addNewMessageActionCreator(text);
        props.dispatch(action);
    }


    return (
        <div className={classes.dialogs}>
            <div className={classes['dialog-items']}>
                { dialogElements }
            </div>
            <div className={classes.messages}>
                { messageElements }
                <textarea ref={newMessageElement} onChange={ updateMessage } value={props.state.newMessage} />
                <input type="submit" value="Отправить" onClick={ addMessage } />
            </div>
        </div>
    )
}

export default Dialogs;