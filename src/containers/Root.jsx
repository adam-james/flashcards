import React from 'react';
import { Provider } from 'react-redux';
import { Route, Router, browserHistory, IndexRoute } from 'react-router';

import App from './App';
import DeckListView from './views/DeckListView';
import CardListView from './views/CardListView';


const Root = ({store}) => (
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/decks" component={App}>
        <IndexRoute component={DeckListView} />
        <Route path="/decks/:id" component={CardListView} />
      </Route>
    </Router>
  </Provider>
);
Root.propTypes = {
  store: React.PropTypes.object.isRequired
};


export default Root;
