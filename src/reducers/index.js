import { combineReducers } from 'redux';


const initialDecks = [
  {
    id: 'ec27bb07-cdad-4953-8d46-fea56573e4bc',
    name: 'Mathematics',
    cards: [
      {
        id: '948e1044-96b4-4818-9d99-77d57c86c8fd',
        question: 'What is 2 + 2?',
        answer: '4'
      },
      {
        id: 'ca1aa81b-a87f-4925-8a2d-1f0aa316174e',
        question: 'What is 10 * 10?',
        answer: '100'
      }
    ]
  },
  {
    id: 'c83fe909-fc0f-4746-bd33-dd4691ee34b2',
    name: 'Biology',
    cards: [
      {
        id: '3bf83ac8-c8a1-4b01-804d-246722598609',
        question: 'Which animal has the longest neck?',
        answer: 'Giraffe'
      },
      {
        id: 'd4eb8f71-1085-479a-b2ba-3de48f23032a',
        question: 'Which animal is the largest?',
        answer: 'A whale'
      }
    ]
  },
  {
    id: '7c88680b-9973-474d-9457-78dfa0b1a70b',
    name: 'History',
    cards: [
      {
        id: 'b1cf55a0-7e22-4628-8f4a-c6e22a9aabd6',
        question: 'Who was the first president of the United States?',
        answer: 'George Washington'
      }
    ]
  },
  {
    id: '655b2a7a-e03f-4fd6-82e4-e7b7949d61f1',
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
