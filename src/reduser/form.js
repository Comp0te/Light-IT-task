import { reducer } from 'redux-form';
import { SAVE_USER, POST_FORM_COMMENT_ADD, SUCCESS } from '../constants';

const form = reducer.plugin({
  singIn: (state, action) => {
    switch (action.type) {
      case SAVE_USER:
        return undefined;

      default:
        return state;
    }
  },
  registration: (state, action) => {
    switch (action.type) {
      case SAVE_USER:
        return undefined;

      default:
        return state;
    }
  },
  commentAdd: (state, action) => {
    switch (action.type) {
      case POST_FORM_COMMENT_ADD + SUCCESS:
        return undefined;

      default:
        return state;
    }
  },
});

export default form;
