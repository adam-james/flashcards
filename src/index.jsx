import React, { PropTypes } from 'react';
import { render } from 'react-dom';


const HelloWorld = ({name}) => (
  <h1>Hello, {name}!</h1>
);

HelloWorld.propTypes = {
  name: PropTypes.string.isRequired
};


render(
  <HelloWorld name={'Flashcards'}/>,
  document.getElementById('root')
);
