import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';

import { flashUiMessage, updateCard } from '../../actions';

import Container from '../../components/Container';
import CardForm from '../../components/CardForm';
import SubNav from '../../components/SubNav';


const CardDetailView = ({cards, decks, dispatch, params, router}) => {
  const { cardId, deckId } = params;
  const card = cards[cardId];
  const deck = decks[deckId];
  const cancel = (e) => {
    e.stopPropagation();
    router.push(`/decks/${card.deck}/cards`);
  }

  const handleSubmit = (card) => {
    dispatch(updateCard(card));
    dispatch(flashUiMessage('Information saved.'));
    router.push(`/decks/${card.deck}/cards`);
  }

  const subNavProps = {
    title: deck.name,
    titleLink:`/decks/${deckId}/cards`,
    message: `${deck.cards.length} cards`,
    navItems: [
      {
        name: 'Delete Card',
        icon: 'delete-card-icon'
      }
    ]
  };

  return (
    <section className="card-detail-view">
      <SubNav {...subNavProps} />
      <Container>
        <section className="card-detail-container">
          <div className="card-detail-item">
            <CardForm card={card}
                      onSubmit={handleSubmit}
                      onCancel={cancel} />
          </div>
        </section>
      </Container>
    </section>
  );
}
CardDetailView.propTypes = {
  cards: PropTypes.object.isRequired,
  decks: PropTypes.object.isRequired,
  dispatch: PropTypes.func.isRequired,
  params: PropTypes.object.isRequired,
  router: PropTypes.object.isRequired
};


const mapStateToProps = state => ({
  cards: state.cards,
  decks: state.decks
});


const CardDetailViewWithRouter = withRouter(CardDetailView);

export default connect(mapStateToProps)(CardDetailViewWithRouter);
