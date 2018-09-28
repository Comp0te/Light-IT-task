import React from 'react';

export default function PageHeader() {
  return (
    <header className="page-header container">
      <p className="page-header__title">
        Test task for the company
        <a className="page-header__light-it" href="https://light-it.net" target="_blank" rel="noopener noreferrer">
          Light IT
        </a>
      </p>
      <button className="page_header__sing-in button" type="button">
        Sing in
      </button>
      <button className="page_header__register button" type="button">
        Registration
      </button>
    </header>
  );
}
