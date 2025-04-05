import React from "react";
import classes from './Post.module.css'

const Post = () => {
    return (
        <article className={classes.item}>
            <img src="https://avatars.mds.yandex.net/i?id=ba05c5a3615a58c6da2def145a54e120b717e062-6961938-images-thumbs&n=13" alt="" />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis doloremque iste, harum sunt totam facilis eveniet aperiam praesentium voluptates. Placeat!</p>
        </article>
    )
}

export default Post;