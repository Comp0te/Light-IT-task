import {
  LOAD_COMMENTS, START, SUCCESS, FAIL, COMMENT, TOGGLE, RESET,
} from '../constants';

const defaultCommentsState = {
  isVisible: false,
  data: [],
  isLoading: false,
  isLoaded: false,
  errorLoadMessage: '',
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

    default:
      return commentsState;
  }
};
