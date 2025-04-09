const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

const profileReducer = (state, action) => {

    if (action.type === ADD_POST) {
        let newPost = {
            id: 5,
            message: state.postText,
            likesCount: 0
        };
    
        state.posts.push(newPost);
        state.postText = '';
    } else if (action.type === UPDATE_NEW_POST_TEXT) {
        state.postText = action.postText;
    }

    return state;
}

export default profileReducer;