import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';

import { flashUiMessage } from '../../actions';

import Container from '../../components/Container';
import CardForm from '../../components/CardForm';


const NewCardView = ({dispatch, params, router}) => {
  const { deckId } = params;
  const cancel = (e) => {
    e.stopPropagation();
    router.push(`/decks/${deckId}/cards`);
  }

  const handleSubmit = (card) => {
    card.deck = deckId;
    console.log(`create new card: ${JSON.stringify(card)}.`);
    dispatch(flashUiMessage('Information saved.'));
    router.push(`/decks/${deckId}/cards`);
  }

  return (
    <Container>
      <section className="card-detail-container">
        <div className="card-detail-item">
          <CardForm onSubmit={handleSubmit}
                    onCancel={cancel} />
        </div>
      </section>
    </Container>
  );
}


NewCardView.propTypes = {
  dispatch: PropTypes.func.isRequired,
  router: PropTypes.object.isRequired,
  params: PropTypes.object.isRequired
};


const NewCardViewWithRouter = withRouter(NewCardView);

export default connect(() => ({}))(NewCardViewWithRouter);