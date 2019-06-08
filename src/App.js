import React from 'react';
import { connect } from 'react-redux'


function App(props) {
  // debugger
  return (
    <>
      <h1>{props.greeting}</h1>
      <input
        type='text'
        placeholder='Your greeting'
        onBlur={(event) => props.dispatch({type: 'PROPOSE_GREETING', proposed_greeting: event.target.value})}
      />
      <button onClick={() => props.dispatch({ type: 'CHANGE_GREETING'})}>
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
    dispatch: state.dispatch
  }
}

export default connect(mapStateToProps
)(App);
