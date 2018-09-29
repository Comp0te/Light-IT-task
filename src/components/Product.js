import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { URL } from '../constants';
import { activeProduct } from '../AC';
import CommentList from './CommentList';

function Product(props) {
  const { data, backToList, activeProductId } = props;
  const imgUrl = URL.IMAGE_SRC + data.img;

  const handleBackButtonClick = () => backToList();

  const getProductBody = () => (
    <div className="product-details__wraper">
      <div className="product-details__img-wraper">
        <img className="product-details__img" src={imgUrl} alt="product" />
        <button
          className="product-details__button button"
          type="button"
          onClick={handleBackButtonClick}
        >
          Back to products list
        </button>
      </div>
      <div className="product-details__content-wraper">
        <h1 className="product-details__heading">{data.title}</h1>
        <p className="product-details__description">{data.text}</p>
      </div>
    </div>
  );

  return (
    <article className="product-details">
      {getProductBody()}
      <CommentList productId={activeProductId} />
    </article>
  );
}

Product.propTypes = {
  activeProductId: PropTypes.string,
  data: PropTypes.shape({
    id: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
    ]),
    img: PropTypes.string,
    title: PropTypes.string,
    text: PropTypes.string,
  }),
  backToList: PropTypes.func.isRequired,
};

Product.defaultProps = {
  data: {},
  activeProductId: null,
};

const mapStateToProps = state => ({
  activeProductId: state.products.activeProduct,
});

const mapDispatchToProps = dispatch => (
  {
    backToList: () => {
      dispatch(activeProduct(null));
    },
  }
);

export default connect(mapStateToProps, mapDispatchToProps)(Product);
