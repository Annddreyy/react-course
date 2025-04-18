import React from "react";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import classes from './Profile.module.css'

const Profile = (props) => {
    return (
        <section className={classes.profile}>
            <ProfileInfo profileInformation={ props.profileInformation } />
            <MyPostsContainer />
        </section>
    )
};

export default Profile;