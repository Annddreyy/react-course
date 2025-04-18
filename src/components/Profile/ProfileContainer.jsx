import React from 'react';
import Profile from './Profile';
import { connect } from 'react-redux';
import { setProfileThunkCreator } from '../../redux/profileReducer';
import { withRouter } from '../../hoc/withRouter';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { compose } from 'redux';

class ProfileContainer extends React.Component {
    componentDidMount() {
        this.getUserInformation();
    }

    getUserInformation() {
        let userId = this.props.params.userId;
        if (!userId) { userId = 2; }
        this.props.setProfileThunkCreator(userId);
    }

    render() {
        return (
            <Profile 
                profileInformation={ this.props.profileInformation } 
                isAuth={ this.props.isAuth }
            />
            )
    }
}


let mapStateToProps = (state) => {
    return {
        profileInformation: state.profilePage.profileInformation
    }
}

let mapDispatchToProps = {
    setProfileThunkCreator
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect,
    withRouter,
)(ProfileContainer);
