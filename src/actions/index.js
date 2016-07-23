import {
  UPDATE_CARD
} from '../constants';


const updateCard = ({id, question, answer}) => ({
  type: UPDATE_CARD,
  payload: {id, question, answer}
});
