import React from "react";
import classes from './Post.module.css'

const Post = (props) => {
    return (
        <article className={classes.item}>
            <img src="https://avatars.mds.yandex.net/i?id=ba05c5a3615a58c6da2def145a54e120b717e062-6961938-images-thumbs&n=13" alt="" />
            <p>{props.message}</p>
            <span>Likes {props.likesCount}</span>
        </article>
    )
}

export default Post;