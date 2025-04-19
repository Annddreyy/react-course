import { addPostActionCreator, updatePostActionCreator } from "../../../redux/profileReducer";
import MyPosts from "./MyPosts";
import { connect } from "react-redux";

let mapStateToProps = (state) => {
    return {
        posts: state.profilePage.posts,
        postText: state.profilePage.postText
    }
};

let mapDispatchToProps = (dispatch) => {
    return {
        addPost: () => dispatch(addPostActionCreator()),
        updatePost: (text) => dispatch(updatePostActionCreator(text))
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;