import React from "react";

const ProfileInfo = (props) => {
    return (
        <div className="profile-info">
            <div>
                <img src="https://avatars.mds.yandex.net/i?id=ba05c5a3615a58c6da2def145a54e120b717e062-6961938-images-thumbs&n=13" alt=""></img>
            </div>
            <div>
                <p>Обо мне: { props.aboutMe ? props.aboutMe : '-' }</p>
                <p>facebook: { props.contacts.facebook ? props.contacts.facebook : '-' }</p>
                <p>website: { props.contacts.website ? props.contacts.website : '-' }</p>
                <p>vk: { props.contacts.vk ? props.contacts.vk : '-' }</p>
                <p>twitter: { props.contacts.twitter ? props.contacts.twitter : '-' }</p>
                <p>instagram: { props.contacts.instagram ? props.contacts.instagram : '-' }</p>
                <p>youtube: { props.contacts.youtube ? props.contacts.youtube : '-' }</p>
                <p>github: { props.contacts.github ? props.contacts.github : '-' }</p>
                <p>mainLink: { props.contacts.mainLink ? props.contacts.mainLink : '-' }</p>
                <p>looking for a job: { props.lookingForAJob ? 'да' : 'нет' }</p>
                <p>looking for a job description: { props.lookingForAJobDescription ? props.lookingForAJobDescription : '-' }</p>
                <p>fullName: { props.fullName }</p>
                <p>photos:</p>
                <div>
                    <img src={ props.photos.small } alt="" />
                    <img src={ props.photos.large } alt="" />
                </div>
            </div>
        </div>
    )
}

export default ProfileInfo;