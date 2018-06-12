import { combineReducers } from 'redux';
import { createStore, applyMiddleware } from 'redux';
import appBody from './app_body';
import thunk from 'redux-thunk';

const reducer = combineReducers({
  appBody,
});

const store = createStore(reducer, {}, applyMiddleware(thunk));
export default store;
