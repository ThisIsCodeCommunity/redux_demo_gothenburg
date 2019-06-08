import React, { Component } from 'react';
import { connect } from 'react-redux'
import axios from 'axios'
import { setEmail, setPassword, asyncLogin } from './state/actions/authentication';

class LoginForm extends Component {

  handleLogin() {
    this.props.asyncLogin(this.props.user_credentials.email, this.props.user_credentials.password);
    this.forceUpdate();
  }

  render() {
    return (
      <>
        {this.props.user_credentials.token ? <p>Your token is {this.props.user_credentials.token}</p>
          :
          <>
            <input
              type="text"
              placeholder='email'
              onBlur={(event) => { this.props.setEmail(event.target.value) }} />
            <input
              type="password"
              placeholder='password'
              onBlur={(event) => { this.props.setPassword(event.target.value) }} />

            <button
              onClick={this.handleLogin.bind(this)}
            >Register</button>
          </>
        }
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    user_credentials: state.authenticationReducer
  }
}

export default connect(
  mapStateToProps,
  { setEmail, setPassword, asyncLogin }
)(LoginForm);