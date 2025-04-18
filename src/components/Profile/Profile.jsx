import React from "react";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import classes from './Profile.module.css'
import { Navigate } from "react-router-dom";

const Profile = (props) => {
    if (!props.isAuth) {
        return (<Navigate to="/login" />)
    }

    return (
        <section className={classes.profile}>
            <ProfileInfo profileInformation={ props.profileInformation } />
            <MyPostsContainer />
        </section>
    )
};

export default Profile;