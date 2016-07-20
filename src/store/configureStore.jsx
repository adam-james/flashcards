import { createStore, compose } from 'redux';

import rootReducer from '../reducers';


let finalCreateStore;

if (process.env.NODE_EN === 'production') {
  finalCreateStore = compose()(createStore);
}
else {
  finalCreateStore = compose(
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )(createStore);
}


export default (initialState) => {
  const store = finalCreateStore(rootReducer, initialState);

  if (module.hot) {
    module.hot.accept('../reducers', () => {
      const nextRootReducer = require('../reducers');
      store.replaceState(nextRootReducer);
    });
  }

  return store;
}
