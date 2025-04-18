import React from 'react';
import Profile from './Profile';
import { connect } from 'react-redux';
import { setProfileThunkCreator } from '../../redux/profileReducer';
import { useNavigate, useLocation, useParams } from 'react-router-dom';

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
        profileInformation: state.profilePage.profileInformation,
        isAuth: state.auth.isAuth
    }
}

let mapDispatchToProps = {
    setProfileThunkCreator
}

function withRouter(Component) {
    return function WrappedComponent(props) {
        const navigate = useNavigate();
        const location = useLocation();
        const params = useParams();
        
        return (
            <Component
                {...props}
                navigate={navigate}
                location={location}
                params={params}
            />
        );
    };
}

let WithURLDataContainerComponent = withRouter(ProfileContainer);
export default connect(mapStateToProps, mapDispatchToProps)(WithURLDataContainerComponent);
