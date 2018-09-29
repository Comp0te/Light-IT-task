import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { URL } from '../constants';
import { activeProduct } from '../AC';

function Product(props) {
  const {
    title, imgSrc, id, pickProduct,
  } = props;
  const imgTotalSrc = URL.IMAGE_SRC + imgSrc;

  const handleClick = () => pickProduct(id);

  return (
    <li className="products__item">
      <div className="products__img-wraper">
        <img className="products__img" src={imgTotalSrc} alt="product" />
      </div>
      <button className="products__button button" onClick={handleClick} type="button">
        <b className="products__title">{title}</b>
      </button>
    </li>
  );
}

Product.propTypes = {
  title: PropTypes.string.isRequired,
  imgSrc: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  pickProduct: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => (
  {
    pickProduct: (id) => {
      dispatch(activeProduct(id));
    },
  }
);

export default connect(null, mapDispatchToProps)(Product);
