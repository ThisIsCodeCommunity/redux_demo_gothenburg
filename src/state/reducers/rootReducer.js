// import initialState from '../store/initialState'
import { combineReducers} from 'redux'
import greetingReducer from './greetingReducer'
import authenticationReducer from './authenticationReducer'

const rootReducer = combineReducers({
  greetingReducer,
  authenticationReducer
})

export default rootReducer