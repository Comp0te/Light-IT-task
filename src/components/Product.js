import React from 'react';
import PropTypes from 'prop-types';

export default function Product(props) {
  const { title, imgSrc } = props;
  const imgTotalSrc = `http://smktesting.herokuapp.com/static/${imgSrc}`;

  return (
    <li>
      <div>
        <img
          src={imgTotalSrc}
          alt="product"
        />
      </div>
      <button type="button">
        <b>{title}</b>
      </button>
    </li>
  );
}

Product.propTypes = {
  title: PropTypes.string.isRequired,
  imgSrc: PropTypes.string.isRequired,
};
