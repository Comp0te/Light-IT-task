import React from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';

function RegistrationForm(props) {
  const { isVisible, closeUp } = props;

  return (
    <div
      className={isVisible
        ? 'registration-modal registration-modal--on modal'
        : 'registration-modal modal'}
    >
      <form className="registration-modal__form">
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
          <label className="label" htmlFor="reg-user-name">User name: </label>
          <Field className="text-input" name="userName" component="input" type="text" id="reg-user-name" />
        </div>
        <div className="registration-modal__field">
          <label className="label" htmlFor="reg-user-email">Email: </label>
          <Field className="text-input" name="email" component="input" type="email" id="reg-user-email" />
        </div>
        <div className="registration-modal__field registration-modal__field--password">
          <label className="label label--password" htmlFor="reg-user-password">User password: </label>
          <Field className="text-input text-input--password" name="userPassword" component="input" type="password" id="reg-user-password" />
          <Field className="text-input text-input--password" name="userPassword" component="input" type="password" />
        </div>
        <div className="registration-modal__buttons-wraper">
          <button
            className="registration-modal__button button"
            type="submit"
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
  closeUp: PropTypes.func.isRequired,
};

export default reduxForm({
  form: 'registration',
})(RegistrationForm);
