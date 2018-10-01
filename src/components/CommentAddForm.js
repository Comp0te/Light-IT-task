import React from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';

function CommentAddForm(props) {
  const {
    isVisible, closeUp, handleSubmit, isLoading,
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
        <div className="comment-add-modal__field">
          <label className="label" htmlFor="form-comment">Comment: </label>
          <Field className="textarea" name="text" component="textarea" id="form-comment" placeholder="Write anything here..." />
        </div>
        <div className="comment-add-modal__field">
          <label className="label label--centered" htmlFor="form-rate">Product rating: </label>
          <Field className="text-input text-input--small" name="rate" component="input" type="number" id="form-rate" placeholder="rating from 1 to 5" />
        </div>
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
  // from redux-form
  handleSubmit: PropTypes.func.isRequired,
};

export default reduxForm({
  form: 'commentAdd',
})(CommentAddForm);
