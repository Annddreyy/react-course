import React from "react";
import classes from './MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts = (props) => {
    let postElements = props.posts.map(elem => <Post message={elem.message} likesCount={elem.likesCount} id={elem.id} />);
    
    let addPost = () => {
        props.addPost();
    };

    let onPostChange = () => {
        const text = newPostELement.current.value;
        props.updatePost(text);
    };

    const newPostELement = React.createRef();

    return (
        <section className={classes.section}>
            <h3>My posts</h3>
            <div className={classes['new-post-form']}>
                <textarea 
                    name="new_post" 
                    id="new_post" 
                    ref={ newPostELement } 
                    onChange={ onPostChange } 
                    value={ props.postText } 
                    className={ classes.input }
                />
                <input type="submit" value="Опубликовать" onClick={ addPost } />
            </div>
            <div className={classes.posts}>
                { postElements }
            </div>
        </section>
    )
}

export default MyPosts;