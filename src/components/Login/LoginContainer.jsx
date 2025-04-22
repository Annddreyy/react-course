import React from 'react';
import Login from './Login';
import { loginUserThunkCreator } from '../../redux/authReducer';
import { connect } from 'react-redux';

class LoginContainer extends React.Component {
    render() {
      return <Login {...this.props} />;
    }
}
  
const mapDispatchToProps = {
  loginUserThunkCreator
};

const mapStateToProps = (state) => {
  return {
    isAuth: state.auth.isAuth
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);
