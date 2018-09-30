import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import products from './products';
import comments from './comments';
import user from './user';

export default combineReducers({
  products,
  comments,
  user,
  form: formReducer,
});
