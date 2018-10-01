import {
  LOAD_COMMENTS, START, SUCCESS, FAIL, COMMENT, TOGGLE, RESET,
  ADD_COMMENT_FORM, POST_FORM_COMMENT_ADD,
} from '../constants';

const defaultCommentsState = {
  isVisible: false,
  data: [],
  isLoading: false,
  isLoaded: false,
  errorLoadMessage: '',
  commentAddForm: {
    isVisible: false,
    isLoading: false,
    errorMessage: '',
  },
};

export default (commentsState = defaultCommentsState, action) => {
  const { type, payload } = action;

  switch (type) {
    case LOAD_COMMENTS + START: {
      return {
        ...commentsState,
        isLoading: true,
      };
    }

    case LOAD_COMMENTS + SUCCESS: {
      return {
        ...commentsState,
        data: payload,
        isLoading: false,
        isLoaded: true,
      };
    }

    case LOAD_COMMENTS + FAIL: {
      return {
        ...commentsState,
        errorLoadMessage: payload,
      };
    }

    case TOGGLE + COMMENT: {
      return {
        ...commentsState,
        isVisible: !commentsState.isVisible,
      };
    }

    case RESET + COMMENT: {
      return {
        ...defaultCommentsState,
      };
    }

    case TOGGLE + ADD_COMMENT_FORM: {
      return {
        ...commentsState,
        commentAddForm: {
          ...commentsState.commentAddForm,
          isVisible: !commentsState.commentAddForm.isVisible,
        },
      };
    }

    case POST_FORM_COMMENT_ADD + START: {
      return {
        ...commentsState,
        commentAddForm: {
          ...commentsState.commentAddForm,
          isLoading: true,
        },
      };
    }

    case POST_FORM_COMMENT_ADD + SUCCESS: {
      return {
        ...commentsState,
        isLoaded: false,
        isVisible: false,
        commentAddForm: {
          ...commentsState.commentAddForm,
          isLoading: false,
          isVisible: false,
        },
      };
    }

    case POST_FORM_COMMENT_ADD + FAIL: {
      return {
        ...commentsState,
        commentAddForm: {
          ...commentsState.commentAddForm,
          isLoading: false,
          errorMessage: payload,
        },
      };
    }

    default:
      return commentsState;
  }
};
