let wsChannel: WebSocket;

const subscribers = {
    'messages-received': [] as MessagesReceivedSubscriberType[],
    'status-changed': [] as StatusChangedSubscriberType[]
};

const cleanUp = () => {
    wsChannel?.removeEventListener('close', closeConnection);
    wsChannel?.removeEventListener('message', messageHandler);
    wsChannel?.removeEventListener('open', openHandler);
    wsChannel?.removeEventListener('error', errorHandler)
    wsChannel?.close();
}

function createChannel() {
    cleanUp();

    wsChannel = new WebSocket('https://social-network.samuraijs.com/handlers/ChatHandler.ashx');

    notifySubscribersAboutStatus('pending');

    wsChannel.addEventListener('close', closeConnection);
    wsChannel.addEventListener('message', messageHandler);
    wsChannel.addEventListener('open', openHandler);
    wsChannel.addEventListener('error', errorHandler)
}

// Обработчики событий
function closeConnection() {
    notifySubscribersAboutStatus('pending');
    setTimeout(createChannel, 3000);
}

const openHandler = () => {
    notifySubscribersAboutStatus('ready');
};

const errorHandler = () => {
    notifySubscribersAboutStatus('error');
}

function messageHandler(event: MessageEvent) {
    const newMessages = JSON.parse(event.data);
    subscribers['messages-received'].forEach(s => s(newMessages));
}

const notifySubscribersAboutStatus = (status: WSStatusType) => {
    subscribers["status-changed"].forEach(s => s(status));
}

export const chatAPI = {
    start() {
        createChannel();
    },
    
    close() {
        subscribers['messages-received'] = [];
        subscribers['status-changed'] = []
        cleanUp();
        wsChannel?.close();
    },
    
    subscribe(eventType: EventNamesType, callback: MessagesReceivedSubscriberType | StatusChangedSubscriberType) {
        // @ts-ignore
        subscribers[eventType].push(callback);
        return () => {
            // @ts-ignore
            subscribers[eventType] = subscribers[eventType].filter(s => s !== callback);
        }
    },
    
    unsubscribe(eventType: EventNamesType, callback: MessagesReceivedSubscriberType | StatusChangedSubscriberType) {
        // @ts-ignore
        subscribers[eventType] = subscribers[eventType].filter(s => s !== callback);
    },
    
    send(message: string) {
        wsChannel?.send(message);
    }
}

export type ChatMessageAPIType = {
    message: string,
    photo: string,
    userId: number,
    userName: string
};

type MessagesReceivedSubscriberType = (messages: ChatMessageAPIType[]) => void;
type StatusChangedSubscriberType = (status: WSStatusType) => void;

export type WSStatusType = 'pending' | 'ready' | 'error';
type EventNamesType = 'messages-received' | 'status-changed';

