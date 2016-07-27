import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';

import { createCard, flashUiMessage } from '../../actions';

import Container from '../../components/Container';
import CardForm from '../../components/CardForm';
import SubNav from '../../components/SubNav';


const NewCardView = ({decks, dispatch, params, router}) => {
  const { deckId } = params;
  const deck = decks[deckId];
  const cancel = (e) => {
    e.stopPropagation();
    router.push(`/decks/${deckId}/cards`);
  }

  const handleSubmit = (card) => {
    card.deck = deckId;
    dispatch(createCard(card));
    dispatch(flashUiMessage('Information saved.'));
    router.push(`/decks/${deckId}/cards`);
  }

  const subNavProps = {
    title: deck.name,
    titleLink: `/decks/${deckId}/cards`,
    message: `${deck.cards.length} cards`
  };

  return (
    <section className="new-card-view">
      <SubNav {...subNavProps} />
      <Container>
        <section className="card-detail-container">
          <div className="card-detail-item">
            <CardForm onSubmit={handleSubmit}
                      onCancel={cancel} />
          </div>
        </section>
      </Container>
    </section>
  );
}


NewCardView.propTypes = {
  decks: PropTypes.object.isRequired,
  dispatch: PropTypes.func.isRequired,
  router: PropTypes.object.isRequired,
  params: PropTypes.object.isRequired
};


function mapStateToProps(state) {
  return {
    decks: state.decks
  };
}

const NewCardViewWithRouter = withRouter(NewCardView);

export default connect(mapStateToProps)(NewCardViewWithRouter);