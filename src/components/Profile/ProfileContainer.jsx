import React from 'react';
import Profile from './Profile';
import { connect } from 'react-redux';
import { getStatusThunkCreator, setProfileThunkCreator, updateStatusThunkCreator } from '../../redux/profile/profileThunks';
import { withRouter } from '../../hoc/withRouter';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { compose } from 'redux';

class ProfileContainer extends React.Component {
    componentDidMount() {
        this.getUserInformation();
    }

    getUserInformation() {
        let userId = this.props.params.userId;
        console.log( userId );
        debugger;
        if (!userId) { userId = this.props.userId; }
        this.props.setProfileThunkCreator(userId);
        this.props.getStatusThunkCreator(userId);
    }

    render() {
        return (
            <Profile 
                profileInformation={ this.props.profileInformation } 
                isAuth={ this.props.isAuth }
                status={ this.props.status }
                updateStatus={ this.props.updateStatusThunkCreator }
            />
        )
    }
}

let mapStateToProps = (state) => {
    return {
        profileInformation: state.profilePage.profileInformation,
        status: state.profilePage.status,
        userId: state.auth.userId
    }
}

let mapDispatchToProps = {
    setProfileThunkCreator,
    getStatusThunkCreator,
    updateStatusThunkCreator
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect,
    withRouter,
)(ProfileContainer);
