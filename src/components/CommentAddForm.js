import React from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';
import FormField from './FormField';

function CommentAddForm(props) {
  const {
    isVisible, closeUp, handleSubmit, isLoading, errorMessage,
  } = props;

  return (
    <div
      className={isVisible
        ? 'comment-add-modal comment-add-modal--on modal'
        : 'comment-add-modal modal'}
    >
      <form onSubmit={handleSubmit} className="comment-add-modal__form">
        <h2 className="comment-add-modal__heading">
          Your comment:
        </h2>
        <Field
          name="text"
          component={FormField}
          type={null}
          className={{
            input: 'textarea',
            label: 'label',
            wraper: 'comment-add-modal__field',
            error: 'error',
          }}
          id="form-comment"
          placeholder="Write anything here..."
          labelText="Comment: "
        />
        <Field
          name="rate"
          component={FormField}
          type="number"
          className={{
            input: 'text-input text-input--small',
            label: 'label label--centered',
            wraper: 'comment-add-modal__field',
            error: 'error error--centered',
          }}
          id="form-rate"
          placeholder="rating from 1 to 5"
          labelText="Product rating: "
        />
        {errorMessage && (<span className="error">{`Error: ${errorMessage}`}</span>)}
        <div className="comment-add-modal__buttons-wraper">
          <button
            className="comment-add-modal__button button"
            type="submit"
            disabled={isLoading}
          >
          Add comment
          </button>
          <button
            className="comment-add-modal__button button"
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

CommentAddForm.propTypes = {
  isVisible: PropTypes.bool.isRequired,
  isLoading: PropTypes.bool.isRequired,
  closeUp: PropTypes.func.isRequired,
  errorMessage: PropTypes.string.isRequired,
  // from redux-form
  handleSubmit: PropTypes.func.isRequired,
};

const validate = (values) => {
  const error = {};

  if (!values.text) {
    error.text = 'Required';
  }

  if (!values.rate) {
    error.rate = 'Required';
  } else if (values.rate < 1 || values.rate > 5) {
    error.rate = 'The rating should be in the range from 1 to 5.';
  }
  return error;
};

export default reduxForm({
  form: 'commentAdd',
  validate,
})(CommentAddForm);
