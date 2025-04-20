import React from "react";
import classes from './MyPosts.module.css'
import Post from "./Post/Post";
import ReduxNewPostForm from "./NewPost/NewPostForm";

const MyPosts = (props) => {
    let postElements = props.posts.map(elem => <Post message={elem.message} likesCount={elem.likesCount} id={elem.id} />);
    const onSubmit = (formData) => {
        console.log('Данные формы:', formData);
    };

    return (
        <section className={classes.section}>
            <h3>My posts</h3>
            <ReduxNewPostForm 
                updatePost={ props.updatePost } 
                postText={ props.postText } 
                addPost={ props.addPost } 
                onSubmit={onSubmit} 
            />
            <div className={classes.posts}>
                { postElements }

            </div>
        </section>
    )
};

export default MyPosts;