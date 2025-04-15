import React from "react";
import Header from './Header'
import axios from "axios";
import { setUserDataActionCreator } from "../../redux/authReducer";
import { connect } from "react-redux";

class HeaderContainer extends React.Component {
    componentDidMount() {
        console.log( this.props );
        axios.get('https://social-network.samuraijs.com/api/1.0/auth/me', {
            withCredentials: true
        })
        .then(response => {
            let data = response.data;
            if (data.resultCode === 0) {
                let {id, email, login} = response.data.data;
                this.props.setUserData(id, email, login);
            }
        });
    }

    render() {
        return (
            <Header 
                login={this.props.login}
                isAuth={this.props.isAuth}
            />
    )}
}

const mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.login
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setUserData: (userId, email, login) => {
            dispatch(setUserDataActionCreator(userId, email, login))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer);