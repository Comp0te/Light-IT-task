import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Loader from './Loader';
import Comment from './Comment';
import {
  loadComments, toggleCommentsVisibility, toggleAddCommentFormVisibility,
} from '../AC';
import { URL } from '../constants';

class CommentList extends Component {
  static propTypes = {
    productId: PropTypes.string,
    // from connect
    userName: PropTypes.string.isRequired,
    loadCommentsForProduct: PropTypes.func.isRequired,
    toggleVisibilityComments: PropTypes.func.isRequired,
    toggleVisibilityCommentAddForm: PropTypes.func.isRequired,
    comments: PropTypes.shape({
      data: PropTypes.array,
      isLoading: PropTypes.bool,
      isLoaded: PropTypes.bool,
      errorLoadMessage: PropTypes.string,
      isVisible: PropTypes.bool,
    }),
  }

  static defaultProps = {
    productId: null,
    comments: {
      isVisible: false,
      data: [],
      isLoading: false,
      isLoaded: false,
      errorLoadMessage: '',
    },
  }

  handleClickShowComments = () => {
    const {
      loadCommentsForProduct, toggleVisibilityComments, comments, productId,
    } = this.props;

    if (!comments.isLoaded && !comments.isLoading) {
      loadCommentsForProduct(URL.LOAD_COMMENTS + productId);
    }

    toggleVisibilityComments();
  }

  handleClickShowAddCommentForm = () => {
    const { toggleVisibilityCommentAddForm } = this.props;

    toggleVisibilityCommentAddForm();
  }

  getButtonAddComment = () => {
    const { userName, comments } = this.props;

    if (comments.isVisible) {
      if (userName === '') {
        return (
          <p className="comments__auth">In order to leave the comment, please register or sign in to your account.</p>
        );
      }

      return (
        <button
          className="comments__button button"
          type="button"
          onClick={this.handleClickShowAddCommentForm}
        >
        Add new comment
        </button>
      );
    }

    return null;
  };

  render() {
    const { comments, comments: { errorLoadMessage } } = this.props;
    const commentsElements = comments.data.map(comment => (
      <Comment
        key={comment.id}
        date={comment.created_at}
        user={comment.created_by.username}
        rate={comment.rate}
        text={comment.text}
      />
    ));

    if (errorLoadMessage) {
      return (
        <p className="error error--big">{`Error: ${errorLoadMessage}`}</p>
      );
    }

    if (comments.isLoading) {
      return (
        <Loader
          message="Wait a second, the comments are downloaded..."
        />
      );
    }

    return (
      <div className="comments">
        <button
          className="comments__button button"
          type="button"
          onClick={this.handleClickShowComments}
        >
          {comments.isVisible ? 'Hide comments' : 'Show comments' }
        </button>
        {this.getButtonAddComment()}
        <ul
          className={
            comments.isVisible
              ? 'comments__list'
              : 'comments__list comments__list--off'}
        >
          {commentsElements}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  comments: state.comments,
  userName: state.user.userName,
});

const mapDispatchToProps = dispatch => (
  {
    loadCommentsForProduct: (url) => {
      dispatch(loadComments(url));
    },
    toggleVisibilityComments: () => {
      dispatch(toggleCommentsVisibility());
    },
    toggleVisibilityCommentAddForm: () => {
      dispatch(toggleAddCommentFormVisibility());
    },
  }
);

export default connect(mapStateToProps, mapDispatchToProps)(CommentList);
