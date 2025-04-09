import React from "react";
import classes from './MyPosts.module.css'

import Post from "./Post/Post";

const MyPosts = (props) => {
    let postElements = props.posts.map(elem => <Post message={elem.message} likesCount={elem.likesCount} id={elem.id} />);
    
    let addPost = () => {
        props.dispatch({ type: 'ADD-POST' });
    };

    let onPostChange = () => {
        const text = newPostELement.current.value;
        props.dispatch({ 
            type: 'UPDATE-NEW-POST-TEXT',
            postText: text
        });
    };

    const newPostELement = React.createRef();
    return (
        <div>
            My posts
            <div>
                <textarea 
                name="new_post" 
                id="new_post" 
                ref={newPostELement} 
                onChange={onPostChange} 
                value={props.postText} 
                />
                <input type="submit" value="Опубликовать" onClick={ addPost } />
            </div>
            <div>
                { postElements }
            </div>
        </div>
    )
}

export default MyPosts;