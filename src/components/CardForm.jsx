import React, { PropTypes } from 'react';


class CardForm extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const card = this.props.card || {};
    return (
      <form action="" className="card-form" onSubmit={ e => this.handleSubmit(e) }>
        <label htmlFor="question">Question</label>
        <textarea id="question"
                  ref="question"
                  onFocus={ e => this.handleFocus(e) }
                  onBlur={ e => this.handleBlur(e) }
                  defaultValue={card.question || ''}>
        </textarea>
        <label htmlFor="answer">Answer</label>
        <textarea id="answer"
                  ref="answer"
                  onFocus={ e => this.handleFocus(e) }
                  onBlur={ e => this.handleBlur(e) }
                  defaultValue={card.answer || ''}>
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
    if (this.props.card) {
      this.props.onSubmit({
        id: this.props.card.id,
        question: this.refs['question'].value,
        answer: this.refs['answer'].value,
        deck: this.props.card.deck
      });
    }
    else {
      this.props.onSubmit({
        question: this.refs['question'].value,
        answer: this.refs['answer'].value,
      });
    }
  }
}


CardForm.propTypes = {
  card: PropTypes.object,
  onSubmit: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired
};


export default CardForm;