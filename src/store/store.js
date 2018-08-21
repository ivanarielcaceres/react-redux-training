import { createStore, applyMiddleware } from 'redux';
import reducer from '../reducers/reducer';
import initialState from './initialState';
import reduxThunk from 'redux-thunk';

const store = createStore(reducer, initialState, applyMiddleware(reduxThunk));

export default store;
