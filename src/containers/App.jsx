import React from 'react';
import uuid from 'uuid';

import Header from '../components/Header';
import SubNav from '../components/SubNav';
import DeckList from '../components/DeckList';

const decks = [
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


export default () => (
  <div>
    <Header />
    <SubNav username="User" numDecks={4}/>
    <DeckList decks={decks} />
  </div>
);
