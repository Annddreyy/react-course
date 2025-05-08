import React from "react";
import MyPostsContainer from "./MyPosts/MyPostsContainer.tsx";
import ProfileInfo from "./ProfileInfo/ProfileInfo.tsx";
import classes from './Profile.module.css'
import { ProfileInformationType } from "../../types/types";

export type ProfileInfoType = {
    profileInformation: ProfileInformationType | null, 
    status: string | null, 
    updateStatus: (status: string | null) => void
};

const Profile = (props: ProfileInfoType) => {
    return (
        <section className={ classes.profile }>
            <ProfileInfo {...props} />
            <MyPostsContainer />
        </section>
    )
};

export default Profile;