import React from "react";
import Header from './Header'
import { setUserDataActionCreator } from "../../redux/authReducer";
import { connect } from "react-redux";
import { authAPI } from "../../api/api";

class HeaderContainer extends React.Component {
    componentDidMount() {
        authAPI.authUser()
        .then(response => {
            if (response.resultCode === 0) {
                let { id, email, login } = response.data;
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