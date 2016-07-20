import { combineReducers } from 'redux';
import uuid from 'uuid';


const initialDecks = [
  {
    id: uuid.v4(),
    name: 'Mathematics',
    cards: {length: 10}
  },
  {
    id: uuid.v4(),
    name: 'Biology',
    cards: {length: 12}
  },
  {
    id: uuid.v4(),
    name: 'History',
    cards: {length: 21}
  },
  {
    id: uuid.v4(),
    name: 'Chemistry',
    cards: {length: 0}
  },
];


const decks = (state=initialDecks, action) => {
  switch (action.type) {
    default:
      return state;
  }
}


const rootReducer = combineReducers({
  decks
});


export default rootReducer;
