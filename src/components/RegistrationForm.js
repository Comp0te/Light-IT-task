import React from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';
import FormField from './FormField';

function RegistrationForm(props) {
  const {
    isVisible, closeUp, handleSubmit, isLoading, errorMessage,
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
        <Field
          name="firstName"
          component={FormField}
          type="text"
          className={{
            input: 'text-input',
            label: 'label',
            wraper: 'registration-modal__field',
            error: 'error',
          }}
          id="reg-first-name"
          labelText="First name: "
        />
        <Field
          name="lastName"
          component={FormField}
          type="text"
          className={{
            input: 'text-input',
            label: 'label',
            wraper: 'registration-modal__field',
            error: 'error',
          }}
          id="reg-last-name"
          labelText="Last name: "
        />
        <Field
          name="username"
          component={FormField}
          type="text"
          className={{
            input: 'text-input',
            label: 'label',
            wraper: 'registration-modal__field',
            error: 'error',
          }}
          id="reg-user-name"
          labelText="User name: * "
        />
        <Field
          name="email"
          component={FormField}
          type="email"
          className={{
            input: 'text-input',
            label: 'label',
            wraper: 'registration-modal__field',
            error: 'error',
          }}
          id="reg-user-email"
          labelText="Email: "
          placeholder="example@examp.com"
        />
        <Field
          name="password"
          component={FormField}
          type="password"
          className={{
            input: 'text-input text-input--small',
            label: 'label label--centered',
            wraper: 'registration-modal__field registration-modal__field--password',
            error: 'error',
          }}
          id="reg-user-password"
          labelText="Password: "
          placeholder="Enter the password"
        />
        <p className="registration-modal__required">Fields marked with an asterisk * are required!</p>
        {errorMessage && (<span className="error">{`Error: ${errorMessage}`}</span>)}
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
  errorMessage: PropTypes.string.isRequired,
  // from redux-form
  handleSubmit: PropTypes.func.isRequired,
};

const validate = (values) => {
  const error = {};

  if (!values.username) {
    error.username = 'Required';
  } else if (values.username.length < 3) {
    error.username = 'Must be 3 characters or more.';
  }

  if (!values.password) {
    error.password = 'Required';
  } else if (values.password.length < 6) {
    error.password = 'Must be 6 characters or more.';
  } else if (!/(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{6,}/g.test(values.password)) {
    error.password = 'The password must contain at least one number, one letter in upper case and one letter in lowercase.';
  }

  if (values.email && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    error.email = 'Invalid email address';
  }

  return error;
};

export default reduxForm({
  form: 'registration',
  validate,
})(RegistrationForm);
