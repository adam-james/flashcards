import React from 'react';
import { render } from 'react-dom';
import uuid from 'uuid';

/* eslint-disable */
const Container = ({children}) => (
  <div className="container">
    { children }
  </div>
);
/* eslint-enable */


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


const DeckList = ({decks}) => (
  <Container>
    <section className="deck-list">
        { decks.map( deck =>
          <DeckListPanel key={deck.id} deck={deck} />
        )}
    </section>
  </Container>
);
DeckList.propTypes = {
  decks: React.PropTypes.array.isRequired
};

const DeckListPanel = ({deck}) => (
  <div className="deck-list-panel">
    <h2>{deck.name}</h2>
    <div className="panel-popup">
      <div className="panel-popup-content">
        { deck.cards.length } cards
      </div>
    </div>
  </div>
);
DeckListPanel.propTypes = {
  deck: React.PropTypes.object.isRequired
};


const decks = [
  {
    id: uuid.v4(),
    name: 'Mathematics',
    cards: {length: 10}
  },
  {
    id: uuid.v4(),
    name: 'Biology',
    cards: {length: 12}
  },
  {
    id: uuid.v4(),
    name: 'History',
    cards: {length: 21}
  },
  {
    id: uuid.v4(),
    name: 'Chemistry',
    cards: {length: 0}
  },
];


const App = () => (
  <div>
    <Header />
    <SubNav username="User" numDecks={4}/>
    <DeckList decks={decks} />
  </div>
);


render(
  <App />,
  document.getElementById('root')
);
