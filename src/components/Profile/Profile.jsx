import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import classes from './Profile.module.css';

const Profile = () => {
    return (
        <div>
            <div>
                <img src="https://avatars.mds.yandex.net/i?id=ba05c5a3615a58c6da2def145a54e120b717e062-6961938-images-thumbs&n=13" alt=""></img>
            </div>
            <div>
                ava + profile
            </div>
            <MyPosts />
        </div>
    )
};

export default Profile;