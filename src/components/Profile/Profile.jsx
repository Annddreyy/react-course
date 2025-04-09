import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {
    return (
        <div>
            <ProfileInfo />
            <MyPosts 
            posts={props.state.posts} 
            postText={props.state.postText} 
            dispatch={props.dispatch}
            />
        </div>
    )
};

export default Profile;