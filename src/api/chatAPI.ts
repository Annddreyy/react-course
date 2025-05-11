let subscribers = [] as SubscriberType[];

let wsChannel: WebSocket;


function createChannel() {
    wsChannel?.removeEventListener('close', closeConnection);
    wsChannel?.close();
    wsChannel = new WebSocket('https://social-network.samuraijs.com/handlers/ChatHandler.ashx');
    wsChannel.addEventListener('close', closeConnection);
    wsChannel.addEventListener('message', messageHandler);
}

function closeConnection() {
    setTimeout(createChannel, 3000);
}

function messageHandler(event: MessageEvent) {
    const newMessages = JSON.parse(event.data);
    subscribers.forEach(s => s(newMessages));
}

export const chatAPI = {
    start() {
        createChannel();
    },

    close() {
        subscribers = [];
        wsChannel?.removeEventListener('close', closeConnection);
        wsChannel?.removeEventListener('message', messageHandler);
        wsChannel?.close();
    },

    subscribe(callback: SubscriberType) {
        subscribers.push(callback);
        return () => {
            subscribers = subscribers.filter(s => s !== callback);
        }
    },

    unsubscribe(callback: SubscriberType) {
        subscribers = subscribers.filter(s => s !== callback);
    },

    send(message: string) {
        wsChannel?.send(message);
    }
}

export type ChatMessageType = {
    message: string,
    photo: string,
    userId: number,
    userName: string
};

type SubscriberType = (messages: ChatMessageType[]) => void;