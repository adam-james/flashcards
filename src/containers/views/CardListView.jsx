import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

import Container from '../../components/Container';


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


const CardListView = ({decks, params}) => {
  const { deckId } = params;
  const deck = decks.filter( d => d.id === deckId)[0];
  return (
    <Container>
      <section className="list card-list">
        {
          deck.cards.map( card =>
            <CardListPanel key={card.id} deckId={deckId} card={card} />
          )
        }
      </section>
    </Container>
  );
}
CardListView.propTypes = {
  decks: PropTypes.array.isRequired,
  params: PropTypes.object.isRequired
};


const mapStateToProps = state => ({
  decks: state.decks
});


export default connect(mapStateToProps)(CardListView);
