import React, { Component } from 'react';
import { render } from 'react-dom';


class HelloWorld extends Component {
  render() {
    return (
      <h1 className="hello-world">¡Hola Mundo!</h1>
    );
  }
}

render(
  <HelloWorld />,
  document.getElementById('root')
);
