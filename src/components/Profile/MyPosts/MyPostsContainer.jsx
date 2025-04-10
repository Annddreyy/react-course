import { addPostActionCreator, updatePostActionCreator } from "../../../redux/profileReducer";
import MyPosts from "./MyPosts";
import { connect } from "react-redux";

let mapStateToProps = (state) => {
    return {
        profilePage: state.profilePage
    }
};

let mapDispatchToProps = (dispatch) => {
    return {
        addPost: () => {
            let action = addPostActionCreator();
            dispatch(action);
        },
        onPostChange: (text) => {
            let action = updatePostActionCreator(text);
            dispatch(action);
        }
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;