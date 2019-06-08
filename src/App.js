import React from 'react';
import { connect } from 'react-redux'
import LoginForm from './LoginForm'


function App(props) {
  debugger
  return (
    <>
      <LoginForm />
      { props.user_email && props.authenticated ? <h3>Hello {props.user_email}</h3> : null}
      
      <h1>{props.greeting}</h1>
      <input
        type='text'
        placeholder='Your greeting'
        onBlur={(event) => props.dispatch({ type: 'PROPOSE_GREETING', proposed_greeting: event.target.value })}
      />
      <button onClick={() => props.dispatch({ type: 'CHANGE_GREETING' })}>
        Change greeting
      </button>
      <button onClick={() => props.dispatch({ type: 'RESET' })}>
        Reset
      </button>
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    greeting: state.greetingReducer.greeting,
    user_email: state.authenticationReducer.email,
    authenticated: state.authenticationReducer.token ? true : false,
    dispatch: state.dispatch
  }
}

export default connect(mapStateToProps
)(App);
