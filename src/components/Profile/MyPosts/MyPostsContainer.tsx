import React from "react";
import { addPostActionCreator } from "../../../redux/profile/profileReducer.ts";
import { connect } from "react-redux";
import { AppStateType } from './../../../redux/redux-store.ts';
import { PostType } from "../../../types/types.ts";
import classes from './MyPosts.module.css'
import Post from "./Post/Post";
import ReduxNewPostForm from "./NewPost/NewPostForm";

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
        
        const onSubmit = (formData: FormDataType) => {
            this.props.addPostActionCreator(formData['new-post']);
        };
    
        return (
            <section className={ classes.section }>
                <h3>My posts</h3>
                <ReduxNewPostForm onSubmit={ onSubmit }  />
                <div className= {classes.posts }>
                    { postElements }
                </div>
            </section>
        )
    }
};

type FormDataType = {
    'new-post': string
}

type PropsType = MapStateToPropsType & MapDispatchToPropsType;

type MapStateToPropsType = {
    posts: PostType[]
};

let mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        posts: state.profilePage.posts
    }
};

type MapDispatchToPropsType = {
    addPostActionCreator: (text: string) => void
}

const MyPostsContainer = connect<MapStateToPropsType, MapDispatchToPropsType, {}, AppStateType>(mapStateToProps, { addPostActionCreator })(MyPosts);


export default MyPostsContainer;