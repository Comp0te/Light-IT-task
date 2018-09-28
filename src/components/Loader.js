import React from 'react';
import PropTypes from 'prop-types';

export default function Loader(props) {
  const { message, styleClass } = props;
  const style = `${styleClass} loader`;

  return (
    <p className={style}>{message}</p>
  );
}

Loader.propTypes = {
  message: PropTypes.string.isRequired,
  styleClass: PropTypes.string.isRequired,
};
