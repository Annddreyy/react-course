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

export default connect(null, mapDispatchToProps)(LoginContainer);
