import {
  TOGGLE, SING_IN_FORM, REGISTRATION_FORM,
} from '../constants';

const defaultUserState = {
  isSingInFormVisible: false,
  isRegistrationFormVisible: false,
};

export default (userState = defaultUserState, action) => {
  const { type } = action;

  switch (type) {
    case TOGGLE + SING_IN_FORM: {
      return {
        ...userState,
        isSingInFormVisible: !userState.isSingInFormVisible,
      };
    }

    case TOGGLE + REGISTRATION_FORM: {
      return {
        ...userState,
        isRegistrationFormVisible: !userState.isRegistrationFormVisible,
      };
    }

    default:
      return userState;
  }
};
