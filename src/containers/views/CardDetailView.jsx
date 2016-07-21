import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

import Container from '../../components/Container';


class CardForm extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { card } = this.props;
    return (
      <form action="" onSubmit={ e => this.handleSubmit(e) }>
        <label htmlFor="question">Question</label>
        <input type="text" defaultValue={card.question} ref="question" />

        <label htmlFor="answer">Answer</label>
        <input type="text" defaultValue={card.answer} ref="answer" />

        <button type="button">Cancel</button>
        <button type="submit">Submit</button>
      </form>
    );
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.onSubmit({
      id: this.props.card.id,
      question: this.refs['question'].value,
      answer: this.refs['answer'].value
    });
  }
}
CardForm.propTypes = {
  card: PropTypes.object.isRequired,
  onSubmit: PropTypes.func.isRequired
};


const CardDetailView = ({decks, params}) => {
  const { cardId, deckId } = params;
  const deck = decks.filter( d => d.id === deckId )[0];
  const card = deck.cards.filter( c => c.id === cardId )[0];

  const handleSubmit = (card) => {
    console.log(card)
  }

  return (
    <Container>
      <section className="card-detail-container">
        <div className="card-detail-item">
          <CardForm card={card} onSubmit={handleSubmit} />
        </div>
      </section>
    </Container>
  );
}
CardDetailView.propTypes = {
  decks: PropTypes.array.isRequired,
  params: PropTypes.object.isRequired
};


const mapStateToProps = state => ({
  decks: state.decks
});


export default connect(mapStateToProps)(CardDetailView);
