import React from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';

function RegistrationForm(props) {
  const {
    isVisible, closeUp, handleSubmit, isLoading,
  } = props;

  return (
    <div
      className={isVisible
        ? 'registration-modal registration-modal--on modal'
        : 'registration-modal modal'}
    >
      <form onSubmit={handleSubmit} className="registration-modal__form">
        <h2 className="registration-modal__heading">
          Registration form
        </h2>
        <div className="registration-modal__field">
          <label className="label" htmlFor="reg-first-name">First name: </label>
          <Field className="text-input" name="firstName" component="input" type="text" id="reg-first-name" />
        </div>
        <div className="registration-modal__field">
          <label className="label" htmlFor="reg-last-name">Last name: </label>
          <Field className="text-input" name="lastName" component="input" type="text" id="reg-last-name" />
        </div>
        <div className="registration-modal__field">
          <label className="label" htmlFor="reg-user-name">User name: * </label>
          <Field className="text-input" name="username" component="input" type="text" id="reg-user-name" required />
        </div>
        <div className="registration-modal__field">
          <label className="label" htmlFor="reg-user-email">Email: </label>
          <Field className="text-input" name="email" component="input" type="email" id="reg-user-email" placeholder="example@examp.com" />
        </div>
        <div className="registration-modal__field registration-modal__field--password">
          <label className="label label--centered" htmlFor="reg-user-password">User password: * </label>
          <Field className="text-input text-input--small" name="password" component="input" type="password" id="reg-user-password" placeholder="Ented the password" required />
        </div>
        <p className="registration-modal__required">Fields marked with an asterisk * are required!</p>
        <div className="registration-modal__buttons-wraper">
          <button
            className="registration-modal__button button"
            type="submit"
            disabled={isLoading}
          >
          Register
          </button>
          <button
            className="registration-modal__button button"
            type="button"
            onClick={closeUp}
          >
          Close up
          </button>
        </div>
      </form>
    </div>
  );
}

RegistrationForm.propTypes = {
  isVisible: PropTypes.bool.isRequired,
  isLoading: PropTypes.bool.isRequired,
  closeUp: PropTypes.func.isRequired,
  // from redux-form
  handleSubmit: PropTypes.func.isRequired,
};

export default reduxForm({
  form: 'registration',
})(RegistrationForm);
