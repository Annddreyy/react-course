import React from "react";
import classes from './MyPosts.module.css'
import Post from "./Post/Post";
import ReduxNewPostForm from "./NewPost/NewPostForm";

class MyPosts extends React.Component {
    componentDidUpdate() {
        console.log( 2 );
    }
    render() {
        console.log( 1 );
        let postElements = this.props.posts.map(elem => <Post message={elem.message} likesCount={elem.likesCount} id={elem.id} />);
        
        const onSubmit = (formData) => {
            this.props.addPost(formData['new_post']);
        };
    
        return (
            <section className={classes.section}>
                <h3>My posts</h3>
                <ReduxNewPostForm postText={ this.props.postText } onSubmit={ onSubmit }  />
                <div className={classes.posts}>
                    { postElements }
                </div>
            </section>
        )
    }
};

export default MyPosts;