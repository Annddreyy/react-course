import React from "react";
import ProfileInfo from "./ProfileInfo";
import { connect } from "react-redux";

class ProfileInfoAPIContainer extends React.Component {
    render() {
        return (
        <ProfileInfo 
            aboutMe={ this.props.aboutMe }
            contacts={ this.props.contacts }
            lookingForAJob={ this.props.lookingForAJob }
            photos={ this.props.photos }
            fullName={ this.props.fullName }
        />
    )
    }
}

let mapStateToProps = (state) => {
    let profileInformation = state.profilePage.profileInformation;
    return {
        aboutMe: profileInformation.aboutMe,
        contacts: {
            facebook: profileInformation.contacts.facebook,
            website: profileInformation.contacts.website,
            vk: profileInformation.contacts.vk,
            twitter: profileInformation.contacts.twitter,
            instagram: profileInformation.contacts.instagram,
            youtube: profileInformation.contacts.youtube,
            github: profileInformation.contacts.github,
            mainLink: profileInformation.contacts.mainLink
        },
        lookingForAJob: profileInformation.lookingForAJob,
        lookingForAJobDescription: profileInformation.lookingForAJobDescription,
        fullName: profileInformation.fullName,
        photos: {
            small: profileInformation.photos.small,
            large: profileInformation.photos.large
        }
    }
}

let mapDispatchToProps = (dispatch) => {
    return {

    }
}

const ProfileInfoContainer = connect(mapStateToProps, mapDispatchToProps)(ProfileInfoAPIContainer);
export default ProfileInfoContainer;