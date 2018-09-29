import React from 'react';
// import PropTypes from 'prop-types';


export default function User() {
  return (
    <div className="page-header__user user">
      <button className="user__button button" type="button">
        Sing in
      </button>
      <button className="user__button button" type="button">
        Registration
      </button>
    </div>
  );
}

// User.propTypes = {
// };
