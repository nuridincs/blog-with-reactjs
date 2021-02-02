import {combineReducers} from 'redux';
import blogReducer from './Blog/reducer';

const appReducer = combineReducers({
  blog: blogReducer
})

export default appReducer;