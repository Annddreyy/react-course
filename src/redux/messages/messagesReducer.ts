import { DialogType, MessageType } from "../../types/types";
import { InferActionsType } from "../redux-store";

const initialState = {
    messages:  [
        { id: 1, message: "Hi" },
        { id: 2, message: "Hello!" },
        { id: 3, message: "How are you?" },
        { id: 4, message: "All ok" },
        { id: 5, message: "Thank you" },
        { id: 6, message: "Thanks! "}
    ] as MessageType[],
    dialogs: [
        { id: 1, name: "Andrey" },
        { id: 2, name: "Katya" },
        { id: 3, name: "Ivan" },
        { id: 4, name: "Pete" },
        { id: 5, name: "Petr" },
    ] as DialogType[],
    newMessage: ''
};

export type InitialStateType = typeof initialState;
export type ActionTypes = InferActionsType<typeof actions>;

const messagesReducer = (state = initialState, action: any): InitialStateType => {
    switch(action.type) {
        case 'social-network/messages/ADD_MESSAGE':
            return {
                ...state,
                messages: [...state.messages, { id: 8, message: action.text }],
            };
        default:
            return state;
    }
};

export const actions = {
    addNewMessageActionCreator: (text: string) => ({ type: 'social-network/messages/ADD_MESSAGE', text } as const)
}

export default messagesReducer;