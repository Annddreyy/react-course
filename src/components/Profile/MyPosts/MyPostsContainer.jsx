import React from "react";
import { addPostActionCreator, updatePostActionCreator } from "../../../redux/profileReducer";
import MyPosts from "./MyPosts";

const MyPostsContainer = (props) => {
    debugger;
    let state = props.store.getState();

    let addPost = () => {
        let action = addPostActionCreator();
        props.store.dispatch(action);
    };

    let onPostChange = (text) => {
        let action = updatePostActionCreator(text);
        props.store.dispatch(action);
    };

    return (
        <MyPosts 
            addPost={ addPost } 
            updatePost={ onPostChange } 
            posts={ state.profilePage.posts }
            postText={ state.profilePage.postText } 
        />
    )
}

export default MyPostsContainer;