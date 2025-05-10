import { useEffect, useState } from "react";

export const AddMessageForm: React.FC<{ws: WebSocket | null}> = ({ ws }) => {
    const [message, setMessage] = useState('');
    const [readyStatus, setReadyStatus] = useState<'pending' | 'ready'>('pending');
    
    useEffect(() => {
        function openHandler() {
            setReadyStatus('ready');
        }
        ws?.addEventListener('open', openHandler);

        return () => {
            ws?.removeEventListener('open', openHandler);
        }
        
    }, [ws]);

    const sendMessage = () => {
        ws?.send(message);
        setMessage('');
    };

    return (
        <div>
            <div>
                <textarea onChange={(e) => setMessage(e.currentTarget.value)} value={ message } name="message" id="message"></textarea>
            </div>
            <div>
                <button onClick={ sendMessage } disabled={ ws === null && readyStatus !== 'ready' }>Send</button>
            </div>
        </div>
    )
};
