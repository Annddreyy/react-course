import React from "react";
import classes from './Profile.module.css';

const Profile = () => {
    return (
        <main className={classes.main}>
            <div>
                <img src="https://avatars.mds.yandex.net/i?id=ba05c5a3615a58c6da2def145a54e120b717e062-6961938-images-thumbs&n=13" alt=""></img>
            </div>
            <div>
                ava + profile
            </div>
            <div>
                new post
            </div>
            <div>
                posts
                <div>
                    post1
                </div>
                <div>
                    post2
                </div>
            </div>
        </main>
    )
};

export default Profile;