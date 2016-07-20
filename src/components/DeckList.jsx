import React from 'react';

import Container from './Container';


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

export default DeckList;
