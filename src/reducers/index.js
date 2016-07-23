import { combineReducers } from 'redux';
import { arrayOf, normalize, Schema } from 'normalizr';
import merge from 'lodash/merge';

import { UPDATE_CARD } from '../constants';

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


const cards = (state=initialData.entities.cards, action) => {
  switch (action.type) {
    case UPDATE_CARD:
      return merge({}, state, {
        [action.payload.card.id]: action.payload.card
      });
    default:
      return state;
  }
}


const decks = (state=initialData.entities.decks, action) => {
  switch (action.type) {
    default:
      return state;
  }
}


const initMessages = [
  { message: 'Data saved.' },
  { message: 'An error ocurred when processing your request to our servers.'}
]


const uiMessages = (state=initMessages, action) => {
  switch (action.type) {
    default:
      return state;
  }
}


const rootReducer = combineReducers({
  cards,
  decks,
  uiMessages
});


export default rootReducer;
