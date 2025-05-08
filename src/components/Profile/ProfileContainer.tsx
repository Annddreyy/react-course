import React from 'react';
import Profile from './Profile.tsx';
import { connect } from 'react-redux';
import { getStatusThunkCreator, setProfileThunkCreator, updateStatusThunkCreator } from '../../redux/profile/profileThunks.ts';
import { withRouter } from '../../hoc/withRouter.js';
import { withAuthRedirect } from '../../hoc/withAuthRedirect.tsx';
import { compose } from 'redux';
import { AppStateType } from '../../redux/redux-store';
import { ProfileInformationType } from '../../types/types';

class ProfileContainer extends React.Component<PropsType> {
    componentDidMount() {
        this.getUserInformation();
    }

    getUserInformation() {
        let userId = this.props.params.userId;
        if (!userId) { userId = this.props.userId; }
        this.props.setProfileThunkCreator(userId);
        this.props.getStatusThunkCreator(userId);
    }

    render() {
        return (
            <Profile 
                profileInformation={ this.props.profileInformation } 
                status={ this.props.status }
                updateStatus={ this.props.updateStatusThunkCreator }
            />
        )
    }
}

type PropsType = MapStateToPropsType & MapDispatchToPropsType;

type MapStateToPropsType = {
    profileInformation: ProfileInformationType | null,
    status: string | null,
    userId: number | null
};

type MapDispatchToPropsType = {
    getStatusThunkCreator: (userId: number) => void,
    setProfileThunkCreator: (userId: number) => void,
    updateStatusThunkCreator: (status: string | null) => void
};

let mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        profileInformation: state.profilePage.profileInformation,
        status: state.profilePage.status,
        userId: state.auth.userId
    }
}

export default compose(
    connect<MapStateToPropsType, MapDispatchToPropsType, {}, AppStateType>(mapStateToProps, { setProfileThunkCreator, getStatusThunkCreator, updateStatusThunkCreator }),
    withAuthRedirect,
    withRouter,
)(ProfileContainer);
