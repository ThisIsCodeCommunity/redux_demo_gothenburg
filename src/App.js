import React from 'react';
import { connect } from 'react-redux'


function App(props) {
  // debugger
  return (
    <>
      <h1>{props.greeting}</h1>
      <button onClick={() => props.dispatch({ type: 'CHANGE_GREETING', greeting: 'Hello Venus' })}>
        Change greeting
      </button>
      <button onClick={() => props.dispatch({type: 'RESET'})}>
        Reset
      </button>
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    greeting: state.greeting, 
    dispatch: state.dispatch
  }
}

export default connect(mapStateToProps
)(App);
