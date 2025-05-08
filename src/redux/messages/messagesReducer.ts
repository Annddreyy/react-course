import { DialogType, MessageType } from "../../types/types";

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

const messagesReducer = (state = initialState, action: any): InitialStateType => {
    switch(action.type) {
        case ADD_MESSAGE:
            return {
                ...state,
                messages: [...state.messages, { id: 8, message: action.text }],
            };
        default:
            return state;
    }
};

export ActionTypes = 

export const actions = {
    addNewMessageActionCreator: (text: string) => ({ type: ADD_MESSAGE, text })
}


export default messagesReducer;