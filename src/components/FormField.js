import React from 'react';
import PropTypes from 'prop-types';

export default function FormField(props) {
  const {
    id,
    className,
    placeholder,
    input,
    labelText,
    type,
    meta: { touched, error },
  } = props;

  return (
    <div className={className.wraper}>
      <label className={className.label} htmlFor={id}>{labelText}</label>
      {type !== null
        ? (
          <input
            {...input}
            type={type}
            className={className.input}
            id={id}
            placeholder={placeholder}
          />
        )
        : (
          <textarea
            {...input}
            className={className.input}
            id={id}
            placeholder={placeholder}
          />
        )}
      {touched && (error && <span className={className.error}>{error}</span>)}
    </div>
  );
}

FormField.propTypes = {
  id: PropTypes.string.isRequired,
  className: PropTypes.objectOf(PropTypes.string).isRequired,
  labelText: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  type: PropTypes.string,
};

FormField.defaultProps = {
  placeholder: '',
  type: null,
};
