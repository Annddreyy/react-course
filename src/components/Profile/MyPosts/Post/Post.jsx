import React from "react";
import classes from './Post.module.css'

const Post = (props) => {
    return (
        <article className={classes.item}>
            <div className="top">
                <img src={props.img} alt="" />
                <p>{props.message}</p>
            </div>
            <span>Likes {props.likesCount}</span>
        </article>
    )
}

export default Post;