import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { sendMessage } from "../../../../redux/chat/chatReducer";
import { AppDispatch } from "../../../../redux/redux-store";

export const AddMessageForm: React.FC= () => {
    const [message, setMessage] = useState('');
    const [readyStatus, setReadyStatus] = useState<'pending' | 'ready'>('pending');
    
    const dispatch = useDispatch<AppDispatch>();

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
                <button onClick={ sendMessageHandler } disabled={ false }>Send</button>
            </div>
        </div>
    )
};
