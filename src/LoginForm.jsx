import React, { Component } from 'react';
import { connect } from 'react-redux'
import axios from 'axios'


class LoginForm extends Component {

  handleLogin() {
    axios.post('https://reqres.in/api/login', {
      email: this.props.user_credentials.email,
      password: this.props.user_credentials.password
    })
      .then((response) => {
        this.props.dispatch({ type: 'AUTHENTICATE', payload: response.data.token })
        this.forceUpdate();
      })
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
              onBlur={(event) => { this.props.dispatch({ type: 'SET_EMAIL', payload: event.target.value }) }} />
            <input
              type="password"
              placeholder='password'
              onBlur={(event) => { this.props.dispatch({ type: 'SET_PASSWORD', payload: event.target.value }) }} />

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
  mapStateToProps
)
  (LoginForm);