import { useEffect, useState } from "react";
import { AddMessageForm } from "./AddNewMessageForm/AddNewMessageForm";
import { Messages } from "./Messages/Messages";
import { useDispatch } from "react-redux";
import { startMessagesListening, stopMessagesListening } from "../../../redux/chat/chatReducer";
import { AppDispatch } from "../../../redux/redux-store";

export const Chat: React.FC = () => {
    const dispatch = useDispatch<AppDispatch>();
    useEffect(() => {
        dispatch(startMessagesListening());
        return () => {
            dispatch(stopMessagesListening());
        }
    }, []);

    return (
        <div>
            <Messages />
            <AddMessageForm />
        </div>
    )
};
