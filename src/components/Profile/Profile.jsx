import React from "react";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import ProfileInfoContainer from "./ProfileInfo/ProfileInfoContainer";

const Profile = (props) => {
    return (
        <div>
            <ProfileInfoContainer />
            <MyPostsContainer />
        </div>
    )
};

export default Profile;