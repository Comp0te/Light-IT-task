import React from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';
import FormField from './FormField';

function SingInForm(props) {
  const {
    isVisible, closeUp, handleSubmit, isLoading, errorMessage,
  } = props;

  return (
    <div
      className={isVisible
        ? 'sing-in-modal sing-in-modal--on modal'
        : 'sing-in-modal modal'}
    >
      <form onSubmit={handleSubmit} className="sing-in-modal__form">
        <h2 className="sing-in-modal__heading">
          Authorization form
        </h2>
        <Field
          name="username"
          component={FormField}
          type="text"
          className={{
            input: 'text-input',
            label: 'label',
            wraper: 'sing-in-modal__field',
            error: 'error',
          }}
          id="sing-in-user-name"
          labelText="Username: "
        />
        <Field
          name="password"
          component={FormField}
          type="password"
          className={{
            input: 'text-input',
            label: 'label',
            wraper: 'sing-in-modal__field',
            error: 'error',
          }}
          id="sing-in-password"
          labelText="User password: "
        />
        <div className="sing-in-modal__buttons-wraper">
          {errorMessage && (<span className="error">{`Error: ${errorMessage}`}</span>)}
          <button
            className="sing-in-modal__button button"
            type="submit"
            disabled={isLoading}
          >
          Sing in
          </button>
          <button
            className="sing-in-modal__button button"
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

SingInForm.propTypes = {
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
  }

  if (!values.password) {
    error.password = 'Required';
  }

  return error;
};

export default reduxForm({
  form: 'singIn',
  validate,
})(SingInForm);
