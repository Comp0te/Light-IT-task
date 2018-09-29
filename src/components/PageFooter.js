import React from 'react';

export default function PageFooter() {
  return (
    <footer className="page-footer">
      <div className="container">
        <span className="page-footer__author">
          Created by Dmitry Vinnik
        </span>
        <ul className="page-footer__contacts-list">
          <li className="page-footer__contacts-item">
            <a className="page-footer__link" href="mailto:simbiatoff@gmail.com">Email address</a>
          </li>
          <li className="page-footer__contacts-item">
            <a className="page-footer__link" href="https://www.linkedin.com/in/vinnik-dmitry" target="_blank" rel="noopener noreferrer">Linkedin</a>
          </li>
          <li className="page-footer__contacts-item">
            <a className="page-footer__link" href="https://github.com/Comp0te" target="_blank" rel="noopener noreferrer">GitHub</a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
