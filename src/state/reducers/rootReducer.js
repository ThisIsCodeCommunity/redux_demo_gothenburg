// import initialState from '../store/initialState'
import { combineReducers} from 'redux'
import greetingReducer from './greetingReducer'

const rootReducer = combineReducers({
  greetingReducer
})

export default rootReducer