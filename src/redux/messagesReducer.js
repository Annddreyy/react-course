const ADD_MESSAGE = 'ADD-NEW-MESSAGE';
const UPDATE_MESSAGE = 'UPDATE-MESSAGE';

const initialState = {
    messages:  [
        { id: 1, message: "Hi" },
        { id: 2, message: "Hello!" },
        { id: 3, message: "How are you?" },
        { id: 4, message: "All ok" },
        { id: 5, message: "Thank you" },
        { id: 6, message: "Thanks! "}
    ],
    dialogs: [
        { id: 1, name: "Andrey" },
        { id: 2, name: "Katya" },
        { id: 3, name: "Ivan" },
        { id: 4, name: "Pete" },
        { id: 5, name: "Petr" },
    ],
    newMessage: ''
};

const messagesReducer = (state = initialState, action) => {
    let stateCopy;
    switch(action.type) {
        case UPDATE_MESSAGE:
            stateCopy = JSON.parse(JSON.stringify(state));
            stateCopy.newMessage = action.newMessage;
            return stateCopy;
        case ADD_MESSAGE:
            stateCopy = JSON.parse(JSON.stringify(state));
            const message = {
                id: 8,
                message: stateCopy.newMessage
            }
            stateCopy.messages.push(message);
            stateCopy.newMessage = '';
            return stateCopy;
        default:
            return state;
    }
};

export const updateMessageActionCreator = (text) => ({
    type: UPDATE_MESSAGE,
    newMessage: text
});

export const addNewMessageActionCreator = () => ({ type: ADD_MESSAGE });

export default messagesReducer;