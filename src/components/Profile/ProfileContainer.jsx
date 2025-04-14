import React from 'react';
import Profile from './Profile';
import axios from 'axios';
import { connect } from 'react-redux';
import { setProfileInformationActionCreator } from '../../redux/profileReducer';

class ProfileContainer extends React.Component {
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
        return (<Profile profileInformation={ this.props.profileInformation } />)
    }
}

let mapStateToProps = (state) => {
    return {
        profileInformation: state.profilePage.profileInformation
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        setProfileInformation: (profileInformation) => {
            dispatch(setProfileInformationActionCreator(profileInformation))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfileContainer);