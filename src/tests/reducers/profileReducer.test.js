import profileReducer, { addPostActionCreator } from "../../redux/profile/profileReducer";

let state = {
    profileInformation: null,
    posts: [
        { id: 1, message: "My first post", likesCount: 12 },
        { id: 2, message: "My second post", likesCount: 21 },
        { id: 3, message: "My third post", likesCount: 8 },
    ],
    status: ''
};

test('length of posts should be incremented', () => {
    let action = addPostActionCreator('test')
    let newState = profileReducer(state, action);

    expect(newState.posts.length).toBe(4);    
});

test('new message should be "test"', () => {
    let action = addPostActionCreator('test')
    let newState = profileReducer(state, action);

    expect(newState.posts[3].message).toBe('test');    
});
