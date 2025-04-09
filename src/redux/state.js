const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const ADD_MESSAGE = 'ADD-NEW-MESSAGE';
const UPDATE_MESSAGE = 'UPDATE-MESSAGE';

let store = {
    _state: {
        profilePage: {
            posts: [
                { id: 1, message: "My first post", likesCount: 12 },
                { id: 2, message: "My second post", likesCount: 21 },
                { id: 3, message: "My third post", likesCount: 8 },
            ],
            postText: '12324324'
        },
        messagesPage: {
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
        },
        sidebar: {
            users: [ 
                { id: 1, name: 'Andrey' },
                { id: 2, name: 'Ivan' },
                { id: 3, name: 'Petr' },
                { id: 4, name: 'Katya' }
            ]
        }
    },
    _callSubscriber() {
        console.log( 1 );
    },

    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {
        console.log( this._state.messagesPage );
        if (action.type === ADD_POST) {

            let newPost = {
                id: 5,
                message: this._state.profilePage.postText,
                likesCount: 0
            };
        
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.postText = '';
            this._callSubscriber(this._state);

        } else if (action.type === UPDATE_NEW_POST_TEXT) {

            this._state.profilePage.postText = action.postText;
            this._callSubscriber(this._state);
    
        } else if (action.type === UPDATE_MESSAGE) {

            this._state.messagesPage.newMessage = action.newMessage;
            this._callSubscriber(this._state);

        } else if (action.type === ADD_MESSAGE) {
            const message = {
                id: 8,
                message: this._state.messagesPage.newMessage
            }
            this._state.messagesPage.messages.push(message);
            this._state.messagesPage.newMessage = '';
            this._callSubscriber(this._state);
        }
    }
}

export const addPostActionCreator = () => ({ type: ADD_POST });

export const updatePostActionCreator = (text) => ({
    type: UPDATE_NEW_POST_TEXT,
    postText: text
});

export const updateMessageActionCreator = (text) => ({
    type: UPDATE_MESSAGE,
    newMessage: text
});

export const addNewMessageActionCreator = () => ({ type: ADD_MESSAGE });

export default store;