import React, { PropTypes } from 'react';
import { push } from 'react-router';
import { connect } from 'react-redux';

import Header from '../components/Header';
import SubNav from '../components/SubNav';


const getSubNavProps = ({pathname, decks}) => {
  const props = {};
  const pathnameArray = pathname.split('/');

  if (pathnameArray[0] === '' && pathnameArray[1] === 'decks') {
    props.title = 'Welcome, User!';
    props.message = `${decks.length} decks`
    props.navItems = [
      {
        name: 'New Deck',
        icon: 'new-deck-icon'
      }
    ];
  }

  else if (pathnameArray[0] === 'decks' && pathnameArray.length === 2) {
    const deckId = pathnameArray[1];
    const deck = decks.filter( d => d.id === deckId )[0];
    props.title = deck.name;
    props.message = `${deck.cards.length} cards`;
    props.navItems = [
      {
        name: 'Delete Deck',
        icon: 'delete-deck-icon'
      },
      {
        name: 'New Card',
        icon: 'new-card-icon'
      }
    ];
  }

  else {
    props.title = 'Welcome, User!';
    props.message = `${decks.length} decks`;
    props.navItems = [];
  }

  return props;
}


const App = ({children, decks, location}) => {
  const subNavProps = getSubNavProps({
    pathname: location.pathname,
    decks: decks
  });

  return (
    <div>
      <Header />
      <SubNav {...subNavProps} />
      { children }
    </div>
  );
}
App.propTypes = {
  children: PropTypes.element.isRequired,
  location: PropTypes.object.isRequired,
  decks: PropTypes.array.isRequired
};


const mapStateToProps = state => ({
  decks: state.decks
});


export default connect(mapStateToProps, {
  push
})(App);
