// src/redux/store.js
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { thunk } from 'redux-thunk';

import authReducer from './reducers/authReducers';

const rootReducer = combineReducers({
  auth: authReducer,
});

// Apply the redux-thunk middleware
const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;

