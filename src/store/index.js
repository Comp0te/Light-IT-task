import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducer from '../reduser';

const middleWare = applyMiddleware(thunk);

const store = createStore(reducer, {}, middleWare);

export default store;
