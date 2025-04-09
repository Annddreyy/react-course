const ADD_MESSAGE = 'ADD-NEW-MESSAGE';
const UPDATE_MESSAGE = 'UPDATE-MESSAGE';

const messagesReducer = (state, action) => {

    if (action.type === UPDATE_MESSAGE) {
        state.newMessage = action.newMessage;
    } else if (action.type === ADD_MESSAGE) {
        const message = {
            id: 8,
            message: this._state.messagesPage.newMessage
        }
        state.messages.push(message);
        state.newMessage = '';
    }

    return state;
}

export default messagesReducer;