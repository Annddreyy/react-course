import { Dispatch } from "redux";
import { chatAPI, ChatMessageType } from "../../api/chatAPI";
import { BaseThunkType, InferActionsType } from "../redux-store";

let initialState = {
    messages: [] as ChatMessageType[]
}

export type InitialStateType = typeof initialState;

const chatReducer = (state = initialState, action: ActionTypes): InitialStateType => {
    switch(action.type) {
    case 'social-network/chat/SET_MESSAGES':
        return {
            ...state,
            messages: [...state.messages, ...action.messages]
        }
    default:
        return state;
    }
}

export const actions = {
    setMessages: (messages: ChatMessageType[]) => ({ type: 'social-network/chat/SET_MESSAGES', messages } as const)
}

let _newMessageHandler: ((messages: ChatMessageType[]) => void)| null = null;

const newMessageHandlerCreator = (dispatch: Dispatch) => {
    if (_newMessageHandler === null) {
        _newMessageHandler = (messages) => {
            dispatch(actions.setMessages(messages));
        }
    }
    return _newMessageHandler;
}

export const startMessagesListening = (): BaseThunkType<ActionTypes> => async(dispatch) => {
    chatAPI.start();
    console.log( newMessageHandlerCreator(dispatch) );
    chatAPI.subscribe(newMessageHandlerCreator(dispatch));
}

export const stopMessagesListening = (): BaseThunkType<ActionTypes> => async(dispatch) => {
    chatAPI.unsubscribe(newMessageHandlerCreator(dispatch));
    chatAPI.close();
}

export const sendMessage = (message: string): BaseThunkType<ActionTypes> => async(dispatch) => {
    chatAPI.send(message);
}


export type ActionTypes = InferActionsType<typeof actions>;

export default chatReducer;