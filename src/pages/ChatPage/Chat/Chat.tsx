import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { startMessagesListening, stopMessagesListening } from "../../../redux/chat/chatReducer";
import { AppDispatch, AppStateType } from "../../../redux/redux-store";
import { AddMessageForm } from "./AddNewMessageForm/AddNewMessageForm";
import { Messages } from "./Messages/Messages";

export const Chat: React.FC = () => {
    const dispatch = useDispatch<AppDispatch>();

    const status = useSelector((state: AppStateType) => state.chat.status);

    useEffect(() => {
        dispatch(startMessagesListening());
        return () => {
            dispatch(stopMessagesListening());
        }
    }, []);

    return (
        <>
            { 
                status === 'error' ? <div>Some error. Please refresh the page</div>
                :
                <div>
                    <Messages />
                    <AddMessageForm />
                </div>
            }
        </>
    )
};
