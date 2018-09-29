import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Loader from './Loader';
import { loadComments } from '../AC';
import { URL } from '../constants';

class CommentList extends Component {
  static propTypes = {
    loadCommentsForProduct: PropTypes.func.isRequired,
    productId: PropTypes.string,
    comments: PropTypes.shape({
      data: PropTypes.array,
      isLoading: PropTypes.bool,
      isLoaded: PropTypes.bool,
      errorLoadMessage: PropTypes.string,
    }),
  }

  static defaultProps = {
    productId: null,
    comments: {
      data: [],
      isLoading: false,
      isLoaded: false,
      errorLoadMessage: '',
    },
  }


  componentDidMount() {
    const { loadCommentsForProduct, comments } = this.props;

    if (!comments.isLoaded && !comments.isLoading) {
      loadCommentsForProduct(this.getCommentsUrl());
    }
  }

  getCommentsUrl = () => {
    const { productId } = this.props;
    return URL.LOAD_COMMENTS + productId;
  }

  render() {
    const { comments } = this.props;
    // const commentsElements = comments.data.map(comment => (
    //   // <Comment
    //   //   key={comment.id}
    //   //   id={`${comment.id}`}
    //   // />
    // ));

    if (comments.isLoading) {
      return (
        <Loader
          styleClass="comments__loader"
          message="Wait a second, the comments are downloaded..."
        />
      );
    }

    return (
      <div className="comments">
        <button
          className="product-details__button button"
          type="button"
        >
          Show comments
        </button>
        <p className="comments__auth">In order to leave the comment, please register or sign in to your account</p>
        {/* <ul className="comments__list">
          {commentsElements}
        </ul> */}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  comments: state.comments,
});

const mapDispatchToProps = dispatch => (
  {
    loadCommentsForProduct: (url) => {
      dispatch(loadComments(url));
    },
  }
);

export default connect(mapStateToProps, mapDispatchToProps)(CommentList);
