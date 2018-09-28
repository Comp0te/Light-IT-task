import React from 'react';

export default function PageHeader() {
  return (
    <header>
      <p>
        Test task for the company
        <a
          href="https://light-it.net"
          target="_blank"
          rel="noopener noreferrer"
        >
          Light IT
        </a>
      </p>
      <button type="button">Sing in</button>
      <button type="button">Registration</button>
    </header>
  );
}
