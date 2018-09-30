import {
  TOGGLE, SING_IN_FORM, REGISTRATION_FORM, POST_FORM_REGISTRATION, START,
  SUCCESS, FAIL, SAVE_USER, POST_FORM_SING_IN, SING_OUT,
} from '../constants';

const defaultUserState = {
  userName: '',
  token: '',
  singInForm: {
    isVisible: false,
    isLoading: false,
  },
  registrationForm: {
    isVisible: false,
    isLoading: false,
  },
};

export default (userState = defaultUserState, action) => {
  const { type, payload } = action;

  switch (type) {
    case TOGGLE + SING_IN_FORM: {
      return {
        ...userState,
        singInForm: {
          ...userState.singInForm,
          isVisible: !userState.singInForm.isVisible,
        },
      };
    }

    case TOGGLE + REGISTRATION_FORM: {
      return {
        ...userState,
        registrationForm: {
          ...userState.registrationForm,
          isVisible: !userState.registrationForm.isVisible,
        },
      };
    }

    case POST_FORM_REGISTRATION + START: {
      return {
        ...userState,
        registrationForm: {
          ...userState.registrationForm,
          isLoading: true,
        },
      };
    }

    case POST_FORM_REGISTRATION + SUCCESS: {
      return {
        ...userState,
        registrationForm: {
          ...userState.registrationForm,
          isLoading: false,
          isVisible: false,
        },
      };
    }

    case POST_FORM_REGISTRATION + FAIL: {
      return {
        ...userState,
      };
    }

    case POST_FORM_SING_IN + START: {
      return {
        ...userState,
        singInForm: {
          ...userState.singInForm,
          isLoading: true,
        },
      };
    }

    case POST_FORM_SING_IN + SUCCESS: {
      return {
        ...userState,
        singInForm: {
          ...userState.singInForm,
          isLoading: false,
          isVisible: false,
        },
      };
    }

    case POST_FORM_SING_IN + FAIL: {
      return {
        ...userState,
      };
    }

    case SAVE_USER: {
      return {
        ...userState,
        userName: payload.userName,
        token: payload.token,
      };
    }

    case SING_OUT: {
      return {
        ...defaultUserState,
      };
    }

    default:
      return userState;
  }
};
