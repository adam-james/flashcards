import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';

import Container from '../../components/Container';


class CardForm extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { card } = this.props;
    return (
      <form action="" className="card-form" onSubmit={ e => this.handleSubmit(e) }>
        <label htmlFor="question">Question</label>
        <textarea id="question"
                  ref="question"
                  onFocus={ e => this.handleFocus(e) }
                  onBlur={ e => this.handleBlur(e) }
                  defaultValue={card.question}>
        </textarea>
        <label htmlFor="answer">Answer</label>
        <textarea id="answer"
                  ref="answer"
                  onFocus={ e => this.handleFocus(e) }
                  onBlur={ e => this.handleBlur(e) }
                  defaultValue={card.answer}>
        </textarea>
        <div className="button-group">
          <button type="button"
                  className="button"
                  onClick={this.props.onCancel}>
            Cancel
          </button>
          <button type="submit" className="button button-primary">Save</button>
        </div>
      </form>
    );
  }

  handleFocus(e) {
    const label = e.target.previousSibling;
    label.classList.add('focused');
  }

  handleBlur(e) {
    const label = e.target.previousSibling;
    label.classList.remove('focused');
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
  onSubmit: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired
};


const CardDetailView = ({decks, params, router}) => {
  const { cardId, deckId } = params;
  const deck = decks.filter( d => d.id === deckId )[0];
  const card = deck.cards.filter( c => c.id === cardId )[0];
  const cancel = (e) => {
    e.stopPropagation();
    router.push(`/decks/${deck.id}/cards`);
  }

  const handleSubmit = (card) => {
    console.log(card)
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
  decks: PropTypes.array.isRequired,
  params: PropTypes.object.isRequired,
  router: PropTypes.object.isRequired
};


const mapStateToProps = state => ({
  decks: state.decks
});


const CardDetailViewWithRouter = withRouter(CardDetailView);

export default connect(mapStateToProps)(CardDetailViewWithRouter);
