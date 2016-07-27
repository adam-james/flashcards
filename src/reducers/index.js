import { combineReducers } from 'redux';
import { arrayOf, normalize, Schema } from 'normalizr';
import merge from 'lodash/merge';

import { 
  CREATE_CARD,
  UPDATE_CARD,
  SET_UI_MESSAGE,
  CLEAR_UI_MESSAGE 
} from '../constants';

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
    case CREATE_CARD:
      return merge({}, state, {
        [action.payload.card.id]: action.payload.card
      });
    default:
      return state;
  }
}


const decks = (state=initialData.entities.decks, action) => {
  switch (action.type) {
    case CREATE_CARD:
      var deck = state[action.payload.card.deck];
      var updated = merge({}, deck, {
        cards: [...deck.cards, action.payload.card.id]
      });
      return merge({}, state, {
        [updated.id]: updated
      });
    default:
      return state;
  }
}


const uiMessages = (state={}, action) => {
  switch (action.type) {
    case SET_UI_MESSAGE:
      return merge({}, state, {
        [action.payload.messageId]: {
          id: action.payload.messageId,
          message: action.payload.message
        }
      });
    case CLEAR_UI_MESSAGE:
      delete state[action.payload.messageId];
      return merge({}, state);
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
