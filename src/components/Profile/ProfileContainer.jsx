import React from 'react';
import Profile from './Profile';
import axios from 'axios';
import { connect } from 'react-redux';
import { setProfileInformationActionCreator } from '../../redux/profileReducer';
import { useNavigate, useLocation, useParams } from 'react-router-dom';

class ProfileContainer extends React.Component {
    componentDidMount() {
        console.log( this.props );
        debugger;
        this.getUserInformation();
    }

    getUserInformation() {
        let userId = this.props.params.userId;
        if (!userId) {
            userId = 2;
        }
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
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
