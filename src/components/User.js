import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {
  toggleSingInFormVisibility, toggleRegistrationFormVisibility, singOut,
} from '../AC';

function User(props) {
  const {
    toggleSingInForm, toggleRegistrationForm, userName, resetUser,
  } = props;
  const handleSingInButtonClick = () => toggleSingInForm();
  const handleSingOutButtonClick = () => resetUser();
  const handleRegistrationButtonClick = () => toggleRegistrationForm();

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
    </div>
  );
}

User.propTypes = {
  // from connect
  userName: PropTypes.string.isRequired,
  toggleRegistrationForm: PropTypes.func.isRequired,
  toggleSingInForm: PropTypes.func.isRequired,
  resetUser: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
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
    resetUser: () => {
      dispatch(singOut());
    },
  }
);

export default connect(mapStateToProps, mapDispatchToProps)(User);
