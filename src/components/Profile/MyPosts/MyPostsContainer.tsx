import React from "react";
import { actions } from "../../../redux/profile/profileReducer.ts";
import { connect } from "react-redux";
import { AppStateType } from './../../../redux/redux-store.ts';
import { PostType } from "../../../types/types.ts";
import classes from './MyPosts.module.css'
import Post from "./Post/Post.tsx";
import ReduxNewPostForm from "./NewPost/NewPostForm.tsx";

class MyPosts extends React.Component<PropsType> {
    render() {
        let postElements = this.props.posts.map(post => 
            <Post 
                message={ post.message } 
                likesCount={ post.likesCount } 
                img={ '' }
                key={ post.id }
            />
        );
        
        const onSubmit = (formData: NewPostFormDataType) => {
            this.props.addPostActionCreator(formData['new-post']);
        };
    
        return (
            <section className={ classes.section }>
                <h3>My posts</h3>
                <ReduxNewPostForm onSubmit={ onSubmit } />
                <div className= {classes.posts }>
                    { postElements }
                </div>
            </section>
        )
    }
};

let mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        posts: state.profilePage.posts
    }
};

const MyPostsContainer = connect<MapStateToPropsType, MapDispatchToPropsType, {}, AppStateType>(mapStateToProps, { addPostActionCreator: actions.addPostActionCreator })(MyPosts);

export default MyPostsContainer;

type PropsType = MapStateToPropsType & MapDispatchToPropsType;

type MapStateToPropsType = {
    posts: PostType[]
};

type MapDispatchToPropsType = {
    addPostActionCreator: (text: string) => void
}

export type NewPostFormDataType = {
    'new-post': string
}
