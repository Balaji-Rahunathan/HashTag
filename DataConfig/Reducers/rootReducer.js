import profileReducer from './profileReducer'
import {combineReducers} from 'redux'

const rootReducer = combineReducers({
  user:profileReducer,
});


export default rootReducer;