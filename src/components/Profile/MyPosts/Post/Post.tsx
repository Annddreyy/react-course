import React from "react";
import classes from './Post.module.css'

type PostType = {
    img: string,
    message: string,
    likesCount: number
};

const Post = ({ img, message, likesCount }: PostType) => {
    return (
        <article className={classes.item}>
            <div className="top">
                <img src={ img } alt="" />
                <p>{ message }</p>
            </div>
            <span>Likes {likesCount}</span>
        </article>
    )
}

export default Post;