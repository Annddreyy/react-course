import React from "react";
import Preloader from '../../common/Preloader/Preloader';
import classes from './ProfileInfo.module.css';
import ProfileStatusWithHooks from "./ProfileStatus/ProfileStatusWithHooks";
import { ProfileInfoType } from "../Profile";
import img from './../../../assets/people.jpeg';

const ProfileInfo = ({ profileInformation, status, updateStatus }: ProfileInfoType) => {
    if (!profileInformation) {
        return (<Preloader />)
    }
    
    return (
        <div className="profile-info">
            <div>
                <img 
                    src="https://avatars.mds.yandex.net/i?id=ba05c5a3615a58c6da2def145a54e120b717e062-6961938-images-thumbs&n=13" 
                    alt="" 
                    className={ classes.image }></img>
            </div>
            <div className={ classes.items }>
                <div className={ classes['about-right'] }>
                    <img src={ profileInformation.photos.large ||  img } alt="" />
                    <p>{ profileInformation.fullName }</p>
                </div>
                <div className={classes['about-left']}>
                    <p>Обо мне: { profileInformation.fullName || '-' }</p>
                    <div className={ classes.social }>
                        <h3>Социальные сети:</h3>
                        <p>facebook: { profileInformation.contacts.facebook || '-' }</p>
                        <p>website: { profileInformation.contacts.website || '-' }</p>
                        <p>vk: { profileInformation.contacts.vk || '-' }</p>
                        <p>twitter: { profileInformation.contacts.twitter || '-' }</p>
                        <p>instagram: { profileInformation.contacts.instagram || '-' }</p>
                        <p>youtube: { profileInformation.contacts.youtube || '-' }</p>
                        <p>github: { profileInformation.contacts.github ||  '-' }</p>
                        <p>mainLink: { profileInformation.contacts.mainLink || '-' }</p>
                    </div>
                    <div className={classes.status}>
                        <h3>Статус:</h3>
                        <p>В поисках работы: { profileInformation.lookingForAJob ? 'да' : 'нет' }</p>
                        <p>Описание: { profileInformation.lookingForAJobDescription || '-' }</p>
                    </div>
                    <ProfileStatusWithHooks status={ status } updateStatus={ updateStatus } />
                </div>
            </div>
        </div>
    )
}

export default ProfileInfo;