import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from '../actions/loginAction';
import LoginForm from '../components/forms/LoginForm';

export const Login = (props) => {
  return (
    <LoginForm
      validateLoginData={props.actions.validateLoginData}
      loginData={props.loginData}
    />
  );
};

Login.propTypes = {
  actions: PropTypes.object.isRequired,
  loginData: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  return {
    loginData: state.loginData
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
