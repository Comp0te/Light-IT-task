import { combineReducers } from 'redux';
import products from './products';
import comments from './comments';

export default combineReducers({
  products,
  comments,
});
