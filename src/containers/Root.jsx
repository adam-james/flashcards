import React from 'react';
import { Provider } from 'react-redux';
import { Route, Router, browserHistory, IndexRoute, Redirect } from 'react-router';

import App from './App';
import DeckListView from './views/DeckListView';
import CardListView from './views/CardListView';
import CardDetailView from './views/CardDetailView';


const Root = ({store}) => (
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/decks" component={App}>
        <IndexRoute component={DeckListView} />
        <Route path="/decks/:deckId/cards" component={CardListView} />
        <Route path="/decks/:deckId/cards/:cardId" component={CardDetailView} />
      </Route>
      <Redirect from="*" to="decks" />
    </Router>
  </Provider>
);
Root.propTypes = {
  store: React.PropTypes.object.isRequired
};


export default Root;
