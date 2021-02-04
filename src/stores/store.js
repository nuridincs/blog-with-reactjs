import { createStore } from 'redux';
import appReducer from './index';

export const store = createStore(appReducer);
