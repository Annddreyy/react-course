import React from 'react';
import Profile from './Profile';
import axios from 'axios';
import { connect } from 'react-redux';
import { setProfileInformationActionCreator } from '../../redux/profileReducer';

class ProfileAPIContainer extends React.Component {
    componentDidMount() {
        this.getUserInformation();
    }

    getUserInformation() {
        axios.get('https://social-network.samuraijs.com/api/1.0/profile/2')
        .then(response => 
            this.props.setProfileInformation(response.data)
        )
    }

    render() {
        return (<Profile />)
    }
}

let mapStateToProps = (state) => {
    let profileInformation = state.profilePage.profileInformation;
    debugger;
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
        setProfileInformation: (profileInformation) => {
            dispatch(setProfileInformationActionCreator(profileInformation))
        }
    }
}

const ProfileContainer = connect(mapStateToProps, mapDispatchToProps)(ProfileAPIContainer);

export default ProfileContainer;