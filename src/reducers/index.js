import { combineReducers } from 'redux';
import uuid from 'uuid';


const initialDecks = [
  {
    id: uuid.v4(),
    name: 'Mathematics',
    cards: [
      {
        id: uuid.v4(),
        question: 'What is 2 + 2?',
        answer: '4'
      },
      {
        id: uuid.v4(),
        question: 'What is 10 * 10?',
        answer: '100'
      }
    ]
  },
  {
    id: uuid.v4(),
    name: 'Biology',
    cards: [
      {
        id: uuid.v4(),
        question: 'Which animal has the longest neck?',
        answer: 'Giraffe'
      },
      {
        id: uuid.v4(),
        question: 'Which animal is the largest?',
        answer: 'A whale'
      }
    ]
  },
  {
    id: uuid.v4(),
    name: 'History',
    cards: [
      {
        id: uuid.v4(),
        question: 'Who was the first president of the United States?',
        answer: 'George Washington'
      }
    ]
  },
  {
    id: uuid.v4(),
    name: 'Chemistry',
    cards: []
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
