import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { sendMessage } from "../../../../redux/chat/chatReducer";
import { AppDispatch, AppStateType } from "../../../../redux/redux-store";

export const AddMessageForm: React.FC= () => {
    const [message, setMessage] = useState('');
    
    const dispatch = useDispatch<AppDispatch>();

    const status = useSelector((state: AppStateType) => state.chat.status);

    const sendMessageHandler = () => {
        if (!message) {
            return;
        }
        dispatch(sendMessage(message))
        setMessage('');
    };

    return (
        <div>
            <div>
                <textarea onChange={(e) => setMessage(e.currentTarget.value)} value={ message } name="message" id="message"></textarea>
            </div>
            <div>
                <button onClick={ sendMessageHandler } disabled={ status === 'pending' }>Send</button>
            </div>
        </div>
    )
};
