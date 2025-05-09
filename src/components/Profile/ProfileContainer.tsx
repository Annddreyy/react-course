import React from 'react';
import Profile from './Profile';
import { connect } from 'react-redux';
import { getStatusThunkCreator, setProfileThunkCreator, updateStatusThunkCreator } from '../../redux/profile/profileThunks';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { compose } from 'redux';
import { AppStateType } from '../../redux/redux-store';
import { ProfileInformationType } from '../../types/types';
import { withRouter } from '../../hoc/withRouter';

class ProfileContainer extends React.Component<PropsType> {
    componentDidMount() {
        this.getUserInformation();
    }

    componentDidUpdate(prevProps: Readonly<PropsType>, prevState: Readonly<{}>, snapshot?: any): void {
        // @ts-ignore
        if (prevProps.params.userId !== this.props.params.userId) {
            this.getUserInformation();
        }
    }

    getUserInformation() {
        // @ts-ignore
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
    userId: number
};

type MapDispatchToPropsType = {
    getStatusThunkCreator: (userId: number) => void,
    setProfileThunkCreator: (userId: number) => void,
    updateStatusThunkCreator: (status: string | null) => void
};

let mapStateToProps = (state: AppStateType) => {
    return {
        profileInformation: state.profilePage.profileInformation,
        status: state.profilePage.status,
        userId: state.auth.userId
    }
}

export default compose(
    connect<MapStateToPropsType, MapDispatchToPropsType, {}, AppStateType>(mapStateToProps, { setProfileThunkCreator, getStatusThunkCreator, updateStatusThunkCreator }),
    withAuthRedirect,
    withRouter
)(ProfileContainer) as React.ComponentType<any>;
