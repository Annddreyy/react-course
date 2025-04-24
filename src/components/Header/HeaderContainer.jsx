import React from "react";
import Header from './Header'
import { logoutUserThunkCreator } from "../../redux/auth/authThunks";
import { connect } from "react-redux";

class HeaderContainer extends React.Component {
    render() {
        return ( <Header {...this.props} /> )
    }
}

const mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.login
    }
}

const mapDispatchToProps = {
    logoutUserThunkCreator
}

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer);