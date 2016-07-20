import React from 'react';

import Container from './Container';


const SubNav = ({username, numDecks}) => (
  <nav className="sub-nav">
    <Container>
      <div className="nav-left">
        <h1>Welcome, {username}!</h1>
        <span>{numDecks} decks</span>
      </div>
      <div className="nav-right">
        <div className="nav-item icon-group">
          <span className="icon new-deck-icon"></span>
          <span>New Deck</span>
        </div>
      </div>
    </Container>
  </nav>
);
SubNav.propTypes = {
  username: React.PropTypes.string.isRequired,
  numDecks: React.PropTypes.number.isRequired
};


export default SubNav;
