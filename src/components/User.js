import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import SingInForm from './SingInForm';
import RegistrationForm from './RegistrationForm';
import { toggleSingInFormVisibility, toggleRegistrationFormVisibility } from '../AC';


function User(props) {
  const {
    toggleSingInForm, toggleRegistrationForm, isRegistrationFormVisible, isSingInFormVisible,
  } = props;

  const handleSingInButtonClick = () => toggleSingInForm();
  const handleRegistrationButtonClick = () => toggleRegistrationForm();
  return (
    <div className="page-header__user user">
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
      <SingInForm
        isVisible={isSingInFormVisible}
        closeUp={handleSingInButtonClick}
      />
      <RegistrationForm
        isVisible={isRegistrationFormVisible}
        closeUp={handleRegistrationButtonClick}
      />
    </div>
  );
}

User.propTypes = {
  // from connect
  toggleRegistrationForm: PropTypes.func.isRequired,
  toggleSingInForm: PropTypes.func.isRequired,
  isSingInFormVisible: PropTypes.bool.isRequired,
  isRegistrationFormVisible: PropTypes.bool.isRequired,
};

const mapStateToProps = state => ({
  isSingInFormVisible: state.user.isSingInFormVisible,
  isRegistrationFormVisible: state.user.isRegistrationFormVisible,
});

const mapDispatchToProps = dispatch => (
  {
    toggleRegistrationForm: () => {
      dispatch(toggleRegistrationFormVisibility());
    },
    toggleSingInForm: () => {
      dispatch(toggleSingInFormVisibility());
    },
  }
);

export default connect(mapStateToProps, mapDispatchToProps)(User);
