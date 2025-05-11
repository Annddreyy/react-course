import { Dispatch } from "redux";
import { chatAPI, ChatMessageAPIType, WSStatusType } from "../../api/chatAPI";
import { BaseThunkType, InferActionsType } from "../redux-store";
import { v1 } from "uuid";

type ChatMessageType = ChatMessageAPIType & { id: string };

let initialState = {
    messages: [] as ChatMessageType[],
    status: 'pending' as WSStatusType
}

export type InitialStateType = typeof initialState;

const chatReducer = (state = initialState, action: ActionTypes): InitialStateType => {
    switch(action.type) {
    case 'social-network/chat/SET_MESSAGES':
        return {
            ...state,
            messages: [...state.messages, ...action.messages.map( m => ({ ...m, id: v1()}))]
            .filter((m, index, array) => index >= array.length - 100)
        }
    case 'social-network/chat/SET_STATUS':
        return {
            ...state,
            status: action.status
        }
    default:
        return state;
    }
}
            
export const actions = {
    setMessages: (messages: ChatMessageAPIType[]) => ({ type: 'social-network/chat/SET_MESSAGES', messages } as const),
    setStatus: (status: WSStatusType) => ({ type: 'social-network/chat/SET_STATUS', status} as const)
}

let _newMessageHandler: ((messages: ChatMessageAPIType[]) => void)| null = null;
const newMessageHandlerCreator = (dispatch: Dispatch) => {
    if (_newMessageHandler === null) {
        _newMessageHandler = (messages) => {
            dispatch(actions.setMessages(messages));
        }
    }
    return _newMessageHandler;
};

let _newStatusHandler: ((status: WSStatusType) => void) | null = null;
const newStatusHandlerCreator = (dispatch: Dispatch) => {
    if (_newStatusHandler === null) {
        _newStatusHandler = (status) => {
            dispatch(actions.setStatus(status));
        }
    }
    return _newStatusHandler;
};

export const startMessagesListening = (): BaseThunkType<ActionTypes> => async(dispatch) => {
    chatAPI.start();
    chatAPI.subscribe('messages-received', newMessageHandlerCreator(dispatch));
    chatAPI.subscribe('status-changed', newStatusHandlerCreator(dispatch));
}

export const stopMessagesListening = (): BaseThunkType<ActionTypes> => async(dispatch) => {
    chatAPI.unsubscribe('messages-received', newMessageHandlerCreator(dispatch));
    chatAPI.unsubscribe('status-changed', newStatusHandlerCreator(dispatch));
    chatAPI.close();
}

export const sendMessage = (message: string): BaseThunkType<ActionTypes> => async(dispatch) => {
    chatAPI.send(message);
}


export type ActionTypes = InferActionsType<typeof actions>;

export default chatReducer;

