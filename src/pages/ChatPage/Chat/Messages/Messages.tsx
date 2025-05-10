import { useEffect, useState } from 'react';
import { ChatMessageType } from '../Chat';
import { Message } from './Message/Message';
import classes from './Messages.module.css';

export const Messages: React.FC<{ws: WebSocket | null}> = ({ ws }) => {
    const [messages, setMessages] = useState<ChatMessageType[]>([]); 

    useEffect(() => {
        function messageHandler(event: MessageEvent) {
            setMessages((prevMessages) => [...prevMessages, ...JSON.parse(event.data)]);
        }
        ws?.addEventListener('message', messageHandler)

        return () => {
            ws?.removeEventListener('message', messageHandler);
        }
    }, [ws])

    return (
        <div className={ classes.messages }>
            { messages.map(message => <Message message={ message }/>)}
        </div>
    )
};
