import React from "react";
import Header from './Header'
import { authUserThunkCreator } from "../../redux/authReducer";
import { connect } from "react-redux";

class HeaderContainer extends React.Component {
    componentDidMount() {
        this.props.authUserThunkCreator();
    }

    render() {
        return ( <Header login={this.props.login} isAuth={this.props.isAuth} /> )
    }
}

const mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.login
    }
}

const mapDispatchToProps = {
    authUserThunkCreator
}

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer);