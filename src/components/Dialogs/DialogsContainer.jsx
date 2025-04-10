import React from "react";
import Dialogs from "./Dialogs"
import { addNewMessageActionCreator, updateMessageActionCreator } from "../../redux/messagesReducer";

const DialogsContainer = (props) => {
    let state = props.store.getState().messagesPage;

    const updateMessage = (text) => {
        let action = updateMessageActionCreator(text);
        props.store.dispatch(action);
    }

    const addMessage = () => {
        let action = addNewMessageActionCreator();
        props.store.dispatch(action);
    }

    return (
        <Dialogs addNewMessage={ addMessage } updateMessage={ updateMessage } messagesPage={ state } />
    )
}

export default DialogsContainer;