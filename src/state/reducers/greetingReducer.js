import initialState from '../store/initialState'

const greetingReducer = (state = initialState.greetings, action) => {
  switch (action.type) {
    case 'CHANGE_GREETING':
      let newGreeting = state.proposed_greeting || 'No one to greet'
      return {
        ...state, greeting: newGreeting 
      }
    case 'RESET':
      return initialState
    case 'PROPOSE_GREETING':
      return {
        ...state, proposed_greeting: action.proposed_greeting
      }
    default:
      return state
  }
}

export default greetingReducer