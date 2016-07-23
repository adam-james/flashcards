import { combineReducers } from 'redux';
import { arrayOf, normalize, Schema } from 'normalizr';

import mockData from './mockData';


const deck = new Schema('decks');
const card = new Schema('cards');


deck.define({
  cards: arrayOf(card)
});


card.define({
  deck: deck
});


const initialData = normalize(mockData, {
  decks: arrayOf(deck)
});



const decks = (state=initialData.entities.decks, action) => {
  switch (action.type) {
    default:
      return state;
  }
}


const cards = (state=initialData.entities.cards, action) => {
  switch (action.type) {
    default:
      return state;
  }
}


const rootReducer = combineReducers({
  decks,
  cards
});


export default rootReducer;
