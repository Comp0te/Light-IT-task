import React from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';

function SingInForm(props) {
  const { isVisible, closeUp } = props;

  return (
    <div
      className={isVisible
        ? 'sing-in-modal sing-in-modal--on modal'
        : 'sing-in-modal modal'}
    >
      <form className="sing-in-modal__form">
        <h2 className="sing-in-modal__heading">
          Authorization form
        </h2>
        <div className="sing-in-modal__field">
          <label className="label" htmlFor="sing-in-user-name">User name: </label>
          <Field className="text-input" name="userName" component="input" type="text" id="sing-in-user-name" />
        </div>
        <div className="sing-in-modal__field">
          <label className="label" htmlFor="sing-in-password">User password: </label>
          <Field className="text-input" name="userPassword" component="input" type="password" id="sing-in-password" />
        </div>
        <div className="sing-in-modal__buttons-wraper">
          <button
            className="sing-in-modal__button button"
            type="submit"
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
  closeUp: PropTypes.func.isRequired,
};

export default reduxForm({
  form: 'singIn',
})(SingInForm);
