import React from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';

function SingInForm(props) {
  const {
    isVisible, closeUp, handleSubmit, isLoading,
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
        <div className="sing-in-modal__field">
          <label className="label" htmlFor="sing-in-user-name">User name: </label>
          <Field className="text-input" name="username" component="input" type="text" id="sing-in-user-name" required />
        </div>
        <div className="sing-in-modal__field">
          <label className="label" htmlFor="sing-in-password">User password: </label>
          <Field className="text-input" name="password" component="input" type="password" id="sing-in-password" required />
        </div>
        <div className="sing-in-modal__buttons-wraper">
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
  // from redux-form
  handleSubmit: PropTypes.func.isRequired,
};

export default reduxForm({
  form: 'singIn',
})(SingInForm);
