import { createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import dataReducers from '../reducers/data.reducers';
const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
export default createStoreWithMiddleware(dataReducers)