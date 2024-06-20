import { combineReducers } from 'redux';
import counterReducer from './slices/counterSlice';

const uiReducer = combineReducers({
  counter: counterReducer,
});

export default uiReducer;
