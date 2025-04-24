import React from "react";
import Preloader from '../../common/Preloader/Preloader';
import classes from './ProfileInfo.module.css';
import ProfileStatusWithHooks from "./ProfileStatus/ProfileStatusWithHooks";

const ProfileInfo = ({ profileInformation: information, status, updateStatus }) => {
    if (!information) {
        return (<Preloader />)
    }
    
    return (
        <div className="profile-info">
            <div>
                <img 
                src="https://avatars.mds.yandex.net/i?id=ba05c5a3615a58c6da2def145a54e120b717e062-6961938-images-thumbs&n=13" 
                alt="" 
                className={classes.image}
                ></img>
            </div>
            <div className={classes.items}>
                <div className={classes['about-right']}>
                    <img src={ information.photos.large } alt="" />
                    <p>{ information.fullName }</p>
                </div>
                <div className={classes['about-left']}>
                    <p>Обо мне: { information.aboutMe ? information.aboutMe : '-' }</p>
                    <div className={classes.social}>
                        <h3>Социальные сети:</h3>
                        <p>facebook: { information.contacts.facebook ? information.contacts.facebook : '-' }</p>
                        <p>website: { information.contacts.website ? information.contacts.website : '-' }</p>
                        <p>vk: { information.contacts.vk ? information.contacts.vk : '-' }</p>
                        <p>twitter: { information.contacts.twitter ? information.contacts.twitter : '-' }</p>
                        <p>instagram: { information.contacts.instagram ? information.contacts.instagram : '-' }</p>
                        <p>youtube: { information.contacts.youtube ? information.contacts.youtube : '-' }</p>
                        <p>github: { information.contacts.github ? information.contacts.github : '-' }</p>
                        <p>mainLink: { information.contacts.mainLink ? information.contacts.mainLink : '-' }</p>
                    </div>
                    <div className={classes.status}>
                        <h3>Статус:</h3>
                        <p>В поисках работы: { information.lookingForAJob ? 'да' : 'нет' }</p>
                        <p>Описание: { information.lookingForAJobDescription ? information.lookingForAJobDescription : '-' }</p>
                    </div>
                    <ProfileStatusWithHooks status={ status } updateStatus={ updateStatus } />
                </div>
            </div>
        </div>
    )
}

export default ProfileInfo;