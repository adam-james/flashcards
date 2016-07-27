import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import filter from 'lodash/filter';

import Container from '../../components/Container';
import SubNav from '../../components/SubNav';


const CardListPanel = ({card, deckId}) => (
  <Link to={`/decks/${deckId}/cards/${card.id}`}>
    <div className="list-panel card-list-panel">
      <h2>{ card.question }</h2>
      <div className="panel-popup">
        <div className="panel-popup-content">
          <h3>{ card.answer }</h3>
        </div>
      </div>
    </div>
  </Link>
);
CardListPanel.propTypes = {
  card: PropTypes.object.isRequired,
  deckId: PropTypes.string.isRequired
};


const CardListView = ({cards, decks, params}) => {
  const { deckId } = params;
  const deck = decks[deckId];
  const deckCards = filter(cards, c => c.deck === deckId);
  const subNavProps = {
    title: deck.name,
    titleLink: `/decks/${deckId}/cards`,
    message: `${deck.cards.length} cards`,
    navItems: [
      {
        name: 'Delete Deck',
        icon: 'delete-deck-icon'
      },
      {
        name: 'New Card',
        icon: 'new-card-icon',
        link: `/decks/${deck.id}/cards/new`
      }
    ]
  };
  return (
    <section className="card-list-view">
      <SubNav {...subNavProps} />
      <Container>
        <section className="list card-list">
          {
            deckCards.map( card =>
              <CardListPanel key={card.id} deckId={deckId} card={card} />
            )
          }
        </section>
      </Container>
    </section>
  );
}
CardListView.propTypes = {
  cards: PropTypes.object.isRequired,
  decks: PropTypes.object.isRequired,
  params: PropTypes.object.isRequired
};


const mapStateToProps = state => ({
  cards: state.cards,
  decks: state.decks
});


export default connect(mapStateToProps)(CardListView);
