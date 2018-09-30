import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import SingInForm from './SingInForm';
import RegistrationForm from './RegistrationForm';
import {
  toggleSingInFormVisibility, toggleRegistrationFormVisibility,
  postRegistrationForm, postSingInForm, singOut,
} from '../AC';
import { URL } from '../constants';


function User(props) {
  const {
    toggleSingInForm, toggleRegistrationForm, singInFormState,
    registrationFormState, postFormRegistration, postFormSingIn, userName, resetUser,
  } = props;
  const handleSingInButtonClick = () => toggleSingInForm();
  const handleSingOutButtonClick = () => resetUser();
  const handleRegistrationButtonClick = () => toggleRegistrationForm();
  const handleSubmitRegistrationForm = (values) => {
    postFormRegistration(URL.REGISTER_USER, values);
  };
  const handleSubmitSingInForm = (values) => {
    postFormSingIn(URL.AUTHORIZE_USER, values);
  };

  const getBody = () => {
    if (userName === '') {
      return (
        <div className="user">
          <button
            className="user__button button"
            type="button"
            onClick={handleSingInButtonClick}
          >
            Sing in
          </button>
          <button
            className="user__button button"
            type="button"
            onClick={handleRegistrationButtonClick}
          >
            Registration
          </button>
        </div>
      );
    }

    return (
      <div className="user">
        <span className="user__name">{`User: ${userName}`}</span>
        <button
          className="user__button button"
          type="button"
          onClick={handleSingOutButtonClick}
        >
        Sign out
        </button>
      </div>
    );
  };

  return (
    <div className="page-header__user">
      {getBody()}
      <SingInForm
        isVisible={singInFormState.isVisible}
        isLoading={singInFormState.isLoading}
        closeUp={handleSingInButtonClick}
        onSubmit={handleSubmitSingInForm}
      />
      <RegistrationForm
        isVisible={registrationFormState.isVisible}
        isLoading={registrationFormState.isLoading}
        closeUp={handleRegistrationButtonClick}
        onSubmit={handleSubmitRegistrationForm}
      />
    </div>
  );
}

User.propTypes = {
  // from connect
  userName: PropTypes.string.isRequired,
  toggleRegistrationForm: PropTypes.func.isRequired,
  toggleSingInForm: PropTypes.func.isRequired,
  postFormRegistration: PropTypes.func.isRequired,
  postFormSingIn: PropTypes.func.isRequired,
  resetUser: PropTypes.func.isRequired,
  singInFormState: PropTypes.objectOf(PropTypes.bool).isRequired,
  registrationFormState: PropTypes.objectOf(PropTypes.bool).isRequired,
};

const mapStateToProps = state => ({
  singInFormState: state.user.singInForm,
  registrationFormState: state.user.registrationForm,
  userName: state.user.userName,
});

const mapDispatchToProps = dispatch => (
  {
    toggleRegistrationForm: () => {
      dispatch(toggleRegistrationFormVisibility());
    },
    toggleSingInForm: () => {
      dispatch(toggleSingInFormVisibility());
    },
    postFormRegistration: (url, values) => {
      dispatch(postRegistrationForm(url, values));
    },
    postFormSingIn: (url, values) => {
      dispatch(postSingInForm(url, values));
    },
    resetUser: () => {
      dispatch(singOut());
    },
  }
);

export default connect(mapStateToProps, mapDispatchToProps)(User);
