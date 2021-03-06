import React from 'react';
import PropTypes from 'prop-types';

export default function Loader(props) {
  const { message } = props;

  return (
    <p className="loader">{message}</p>
  );
}

Loader.propTypes = {
  message: PropTypes.string.isRequired,
};
