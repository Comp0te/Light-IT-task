import React from 'react';
import PropTypes from 'prop-types';

export default function Comment(props) {
  const {
    date, user, rate, text,
  } = props;
  const getDate = dateToString => new Date(dateToString).toDateString();

  return (
    <li className="comments__item">
      <div className="comments__wraper">
        <span className="comments__user">{`User: ${user}`}</span>
        <span className="comments__rating">{`Rating: ${rate}/5`}</span>
        <span className="comments__date">{getDate(date)}</span>
      </div>
      <p className="comments__text">{text}</p>
    </li>
  );
}

Comment.propTypes = {
  user: PropTypes.string,
  date: PropTypes.string,
  rate: PropTypes.number,
  text: PropTypes.string,
};

Comment.defaultProps = {
  user: '',
  date: '',
  rate: '',
  text: '',
};
