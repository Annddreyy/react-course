import React from "react";
import Login from "./Login";
import { loginUserThunkCreator } from "../../redux/auth/authThunks";
import { connect } from "react-redux";
import { AppStateType } from "../../redux/redux-store";

class LoginContainer extends React.Component<PropsType> {
	render() {
		return <Login {...this.props} />;
	}
}

type PropsType = MapStateToPropsType & MapDispatchToPropsType;

type MapStateToPropsType = {
    captcha: string | null,
    isAuth: boolean
}

type MapDispatchToPropsType = {
    loginUserThunkCreator: (email: string, password: string, remember: boolean, captcha: string) => void
}

const mapStateToProps = (state: AppStateType) => {
	return {
		captcha: state.auth.captchaUrl,
		isAuth: state.auth.isAuth,
	};
};

export default connect<MapStateToPropsType, MapDispatchToPropsType, {}, AppStateType>(mapStateToProps, { loginUserThunkCreator })(LoginContainer);
