import React, { PropTypes } from 'react';
import { push } from 'react-router';
import { connect } from 'react-redux';

import Header from '../components/Header';
import UIMessageList from '../components/UIMessageList';


const App = ({children}) => (
  <div>
    <UIMessageList />
    <Header />
    { children }
  </div>
);
App.propTypes = {
  children: PropTypes.element.isRequired,
};


export default connect(() => ({}), {
  push
})(App);
