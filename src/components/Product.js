import React from 'react';
import PropTypes from 'prop-types';

export default function Product(props) {
  const { title, imgSrc } = props;
  const imgTotalSrc = `http://smktesting.herokuapp.com/static/${imgSrc}`;

  return (
    <li className="products__item">
      <div className="products__img-wraper">
        <img className="products__img" src={imgTotalSrc} alt="product" />
      </div>
      <button className="products__button button" type="button">
        <b className="products__title">{title}</b>
      </button>
    </li>
  );
}

Product.propTypes = {
  title: PropTypes.string.isRequired,
  imgSrc: PropTypes.string.isRequired,
};
