import React from "react";
import classes from './Post.module.css'

const Post = ({ img, message, likesCount }) => {
    return (
        <article className={classes.item}>
            <div className="top">
                <img src={img} alt="" />
                <p>{message}</p>
            </div>
            <span>Likes {likesCount}</span>
        </article>
    )
}

export default Post;