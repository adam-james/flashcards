import React from 'react';
import { render } from 'react-dom';


const Container = ({children}) => (
  <div className="container">
    { children }
  </div>
);
Container.propTypes = {
  children: React.PropTypes.element
};


const Header = () => (
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


const SubNav = ({username, numDecks}) => (
  <nav className="sub-nav">
    <Container>
      <div className="nav-left">
        <h1>Welcome, {username}!</h1>
        <span>{numDecks} decks.</span>
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


const App = () => (
  <div>
    <Header />
    <SubNav username="User" numDecks="4"/>
  </div>
);


render(
  <App />,
  document.getElementById('root')
);
