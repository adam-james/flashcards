import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';

import { flashUiMessage, updateCard } from '../../actions';

import Container from '../../components/Container';
import CardForm from '../../components/CardForm';


const CardDetailView = ({cards, dispatch, params, router}) => {
  const { cardId } = params;
  const card = cards[cardId];
  const cancel = (e) => {
    e.stopPropagation();
    router.push(`/decks/${card.deck}/cards`);
  }

  const handleSubmit = (card) => {
    dispatch(updateCard(card));
    dispatch(flashUiMessage('Information saved.'));
    router.push(`/decks/${card.deck}/cards`);
  }

  return (
    <Container>
      <section className="card-detail-container">
        <div className="card-detail-item">
          <CardForm card={card}
                    onSubmit={handleSubmit}
                    onCancel={cancel} />
        </div>
      </section>
    </Container>
  );
}
CardDetailView.propTypes = {
  cards: PropTypes.object.isRequired,
  dispatch: PropTypes.func.isRequired,
  params: PropTypes.object.isRequired,
  router: PropTypes.object.isRequired
};


const mapStateToProps = state => ({
  cards: state.cards
});


const CardDetailViewWithRouter = withRouter(CardDetailView);

export default connect(mapStateToProps)(CardDetailViewWithRouter);
