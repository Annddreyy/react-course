import React from "react";
import classes from './MyPosts.module.css'

import Post from "./Post/Post";

const MyPosts = () => {
    return (
        <div>
            My posts
            <div>
                <textarea name="new_post" id="new_post"></textarea>
                <input type="submit" value="Опубликовать" />
            </div>
            <div>
                <Post />
                <Post />
            </div>
        </div>
    )
}

export default MyPosts;