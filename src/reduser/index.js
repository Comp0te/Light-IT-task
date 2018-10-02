import { combineReducers } from 'redux';
import form from './form';
import products from './products';
import comments from './comments';
import user from './user';

export default combineReducers({
  products,
  comments,
  user,
  form,
});
