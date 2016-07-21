import React from 'react';
import { IndexLink } from 'react-router';

import Container from './Container';

const Header = () => (
  <header className="header">
    <Container>
      <nav className="header-nav">
        <div className="nav-left">
          <IndexLink to="/">
            <span className="brand"></span>
          </IndexLink>
        </div>

        <div className="nav-right">
          <span className="icon hamburger-icon"></span>
        </div>
      </nav>
    </Container>
  </header>
);


export default Header;
