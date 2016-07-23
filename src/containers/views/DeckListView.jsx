import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import map from 'lodash/map';


import Container from '../../components/Container';


const DeckListPanel = ({deck}) => (
  <div className="list-panel deck-list-panel">
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


const DeckListView = ({decks}) => (
  <Container>
    <section className="list deck-list">
        { map(decks, deck =>
          <Link to={`/decks/${deck.id}/cards`} key={deck.id}>
            <DeckListPanel deck={deck} />
          </Link>
        )}
    </section>
  </Container>
);
DeckListView.propTypes = {
  decks: React.PropTypes.object.isRequired
};


const mapStateToProps = state => ({
  decks: state.decks
});


export default connect(mapStateToProps)(DeckListView);
