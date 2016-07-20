import React from 'react';

import Container from './Container';


export default () => (
  <header className="header">
    <Container>
      <nav className="header-nav">
        <div className="nav-left">
          <span className="brand"></span>
        </div>

        <div className="nav-right">
          <span className="icon hamburger-icon"></span>
        </div>
      </nav>
    </Container>
  </header>
);
