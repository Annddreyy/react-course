import React from "react";
import Header from './Header.tsx'
import { logoutUserThunkCreator } from "../../redux/auth/authThunks.ts";
import { connect } from "react-redux";
import { AppStateType } from "../../redux/redux-store";

class HeaderContainer extends React.Component<PropsType> {
    render() {
        return (
            <Header 
                isAuth={ this.props.isAuth }
                login={ this.props.login }
                logoutUserThunkCreator={ this.props.logoutUserThunkCreator }
            />
        )
    }
}

type PropsType = MapStateToPropsType & MapDispatchToProps;

type MapStateToPropsType = {
    isAuth: boolean,
    login: string | null
};

type MapDispatchToProps = {
    logoutUserThunkCreator: () => void
}

const mapStateToProps = (state: AppStateType) => {
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.login
    }
}

export default connect<MapStateToPropsType, MapDispatchToProps, {}, AppStateType>(mapStateToProps, { logoutUserThunkCreator })(HeaderContainer);