import React from "react";
import classes from './MyPosts.module.css'

import Post from "./Post/Post";

const MyPosts = () => {

    let postData = [
        { id: 1, message: 'My first post', likesCount: 12 },
        { id: 2, message: 'My second post', likesCount: 21 },
        { id: 3, message: 'My third post', likesCount: 8 },
    ];

    let postElements = postData.map(elem => <Post message={elem.message} likesCount={elem.likesCount} id={elem.id} />);

    return (
        <div>
            My posts
            <div>
                <textarea name="new_post" id="new_post"></textarea>
                <input type="submit" value="Опубликовать" />
            </div>
            <div>
                { postElements }
            </div>
        </div>
    )
}

export default MyPosts;