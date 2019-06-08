import initialState from '../store/initialState'


const authenticationReducer = (state = initialState.user_credentials, action) => {

  switch (action.type) {
    case 'SET_EMAIL':
      return {
        ...state, email: action.payload
      }
    case 'SET_PASSWORD':
      return {
        ...state, password: action.payload
      }
    case 'AUTHENTICATE':
      return {
        ...state, token: action.payload
      }
    default:
      return state
  }

}

export default authenticationReducer