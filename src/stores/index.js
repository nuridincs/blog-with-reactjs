import { combineReducers } from 'redux';
import commonReducer from './Common/reducer';

const appReducer = combineReducers({
  common: commonReducer,
});

export default appReducer;
