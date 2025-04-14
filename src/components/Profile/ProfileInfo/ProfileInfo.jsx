import React from "react";
import Preloader from '../../common/Preloader/Preloader'

const ProfileInfo = (props) => {
    let information = props.profileInformation;
    if (!information) {
        return (<Preloader />)
    }
    
    return (
        <div className="profile-info">
            <div>
                <img src="https://avatars.mds.yandex.net/i?id=ba05c5a3615a58c6da2def145a54e120b717e062-6961938-images-thumbs&n=13" alt=""></img>
            </div>
            <div>
                <p>Обо мне: { information.aboutMe ? information.aboutMe : '-' }</p>
                <p>facebook: { information.contacts.facebook ? information.contacts.facebook : '-' }</p>
                <p>website: { information.contacts.website ? information.contacts.website : '-' }</p>
                <p>vk: { information.contacts.vk ? information.contacts.vk : '-' }</p>
                <p>twitter: { information.contacts.twitter ? information.contacts.twitter : '-' }</p>
                <p>instagram: { information.contacts.instagram ? information.contacts.instagram : '-' }</p>
                <p>youtube: { information.contacts.youtube ? information.contacts.youtube : '-' }</p>
                <p>github: { information.contacts.github ? information.contacts.github : '-' }</p>
                <p>mainLink: { information.contacts.mainLink ? information.contacts.mainLink : '-' }</p>
                <p>looking for a job: { information.lookingForAJob ? 'да' : 'нет' }</p>
                <p>looking for a job description: { information.lookingForAJobDescription ? information.lookingForAJobDescription : '-' }</p>
                <p>fullName: { information.fullName }</p>
                <p>photos:</p>
                <div>
                    <img src={ information.photos.small } alt="" />
                    <img src={ information.photos.large } alt="" />
                </div>
            </div>
        </div>
    )
}

export default ProfileInfo;