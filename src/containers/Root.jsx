import React from 'react';
import { Provider, connect } from 'react-redux';
import { Route, Router, browserHistory, IndexRoute, push } from 'react-router';

import DeckListView from './views/DeckListView';
import CardListView from './views/CardListView';

import Header from '../components/Header';
import SubNav from '../components/SubNav';


const App = ({children}) => (
  <div>
    <Header />
    <SubNav username="User" numDecks={4}/>
    { children }
  </div>
);
App.propTypes = {
  children: React.PropTypes.element.isRequired
};


const mapStateToProps = state => ({
  decks: state.decks
});


const FinalApp = connect(mapStateToProps, {
  push
})(App);


const Root = ({store}) => (
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={FinalApp}>
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
