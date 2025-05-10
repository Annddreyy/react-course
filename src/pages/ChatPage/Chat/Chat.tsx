import { useEffect, useState } from "react";
import { AddMessageForm } from "./AddNewMessageForm/AddNewMessageForm";
import { Messages } from "./Messages/Messages";

export type ChatMessageType = {
    message: string,
    photo: string,
    userId: number,
    userName: string
};

export const Chat: React.FC = () => {
    const [ws, setWS] = useState<WebSocket | null>(null);

    useEffect(() => {
        let wsChannel: WebSocket;

        function closeConnection() {
            setTimeout(createChannel, 3000);
        }

        function createChannel() {
            wsChannel?.removeEventListener('close', closeConnection);
            wsChannel?.close();
            
            wsChannel = new WebSocket('https://social-network.samuraijs.com/handlers/ChatHandler.ashx');
            setWS(wsChannel);
            wsChannel.addEventListener('close', closeConnection);
        }

        createChannel();

        return () => {
            wsChannel.removeEventListener('close', closeConnection);
            wsChannel.close();
        }
    }, []);

    return (
        <div>
            <Messages ws={ ws }/>
            <AddMessageForm ws={ ws }/>
        </div>
    )
};
