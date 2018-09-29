import React from 'react';
import User from './User';

export default function PageHeader() {
  return (
    <header className="page-header">
      <div className="page-header__wraper container">
        <p className="page-header__title">
          {'Test task for the company: '}
          <a className="page-header__light-it" href="https://light-it.net" target="_blank" rel="noopener noreferrer">
            Light IT
          </a>
        </p>
        <User />
      </div>
    </header>
  );
}
