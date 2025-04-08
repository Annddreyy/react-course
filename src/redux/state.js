let rerenderEntireTree = () => {
    console.log( 1 );
}

let state = {
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
        ]
    },
    sidebar: {
        users: [ 
            { id: 1, name: 'Andrey' },
            { id: 2, name: 'Ivan' },
            { id: 3, name: 'Petr' },
            { id: 4, name: 'Katya' }
        ]
    }
};

export const addPost = () => {
    let newPost = {
        id: 5,
        message: state.profilePage.postText,
        likesCount: 0
    };

    state.profilePage.posts.push(newPost);
    state.profilePage.postText = '';
    rerenderEntireTree(state);
}

export const setPostText = (postText) => {
    state.profilePage.postText = postText;
    rerenderEntireTree(state);
}

export const subscribe = (observer) => {
    rerenderEntireTree = observer; // Паттерн наблюдатель
}

export default state;