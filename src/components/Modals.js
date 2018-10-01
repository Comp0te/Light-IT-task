import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import SingInForm from './SingInForm';
import RegistrationForm from './RegistrationForm';
import CommentAddForm from './CommentAddForm';
import {
  toggleSingInFormVisibility, toggleRegistrationFormVisibility,
  postRegistrationForm, postSingInForm, toggleAddCommentFormVisibility, postCommentAddForm,
} from '../AC';
import { URL } from '../constants';

function Modals(props) {
  const {
    toggleSingInForm, toggleRegistrationForm, singInForm,
    registrationForm, postFormRegistration, postFormSingIn, commentAddForm,
  } = props;

  const closeUpSingInForm = () => toggleSingInForm();
  const closeUpRegistrationForm = () => toggleRegistrationForm();
  const handleSubmitRegistrationForm = (values) => {
    postFormRegistration(URL.REGISTER_USER, values);
  };
  const handleSubmitSingInForm = (values) => {
    postFormSingIn(URL.AUTHORIZE_USER, values);
  };
  const closeUpAddCommentForm = () => {
    const { toggleCommentAddForm } = props;

    toggleCommentAddForm();
  };
  const handleSubmitCommentAddForm = (values) => {
    const { postFormCommentAdd, productId, token } = props;

    postFormCommentAdd(URL.LOAD_COMMENTS + productId, values, token);
  };

  return (
    <div>
      <SingInForm
        isVisible={singInForm.isVisible}
        isLoading={singInForm.isLoading}
        errorMessage={singInForm.errorMessage}
        closeUp={closeUpSingInForm}
        onSubmit={handleSubmitSingInForm}
      />
      <RegistrationForm
        isVisible={registrationForm.isVisible}
        isLoading={registrationForm.isLoading}
        errorMessage={registrationForm.errorMessage}
        closeUp={closeUpRegistrationForm}
        onSubmit={handleSubmitRegistrationForm}
      />
      <CommentAddForm
        isVisible={commentAddForm.isVisible}
        isLoading={commentAddForm.isLoading}
        errorMessage={commentAddForm.errorMessage}
        closeUp={closeUpAddCommentForm}
        onSubmit={handleSubmitCommentAddForm}
      />
    </div>
  );
}

Modals.propTypes = {
  // from connect
  toggleRegistrationForm: PropTypes.func.isRequired,
  toggleSingInForm: PropTypes.func.isRequired,
  toggleCommentAddForm: PropTypes.func.isRequired,
  postFormRegistration: PropTypes.func.isRequired,
  postFormSingIn: PropTypes.func.isRequired,
  postFormCommentAdd: PropTypes.func.isRequired,
  singInForm: PropTypes.shape({
    isLoading: PropTypes.bool,
    isVisible: PropTypes.bool,
    errorMessage: PropTypes.string,
  }).isRequired,
  registrationForm: PropTypes.shape({
    isLoading: PropTypes.bool,
    isVisible: PropTypes.bool,
    errorMessage: PropTypes.string,
  }).isRequired,
  commentAddForm: PropTypes.shape({
    isLoading: PropTypes.bool,
    isVisible: PropTypes.bool,
    errorMessage: PropTypes.string,
  }).isRequired,
  token: PropTypes.string.isRequired,
  productId: PropTypes.string,
};

Modals.defaultProps = {
  productId: null,
};

const mapStateToProps = state => ({
  singInForm: state.user.singInForm,
  registrationForm: state.user.registrationForm,
  commentAddForm: state.comments.commentAddForm,
  token: state.user.token,
  productId: state.products.activeProduct,
});

const mapDispatchToProps = dispatch => (
  {
    toggleRegistrationForm: () => {
      dispatch(toggleRegistrationFormVisibility());
    },
    toggleSingInForm: () => {
      dispatch(toggleSingInFormVisibility());
    },
    toggleCommentAddForm: () => {
      dispatch(toggleAddCommentFormVisibility());
    },
    postFormRegistration: (url, values) => {
      dispatch(postRegistrationForm(url, values));
    },
    postFormSingIn: (url, values) => {
      dispatch(postSingInForm(url, values));
    },
    postFormCommentAdd: (url, values, token) => {
      dispatch(postCommentAddForm(url, values, token));
    },
  }
);

export default connect(mapStateToProps, mapDispatchToProps)(Modals);
