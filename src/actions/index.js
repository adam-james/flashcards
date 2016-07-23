import {
  UPDATE_CARD,
  SET_UI_MESSAGE,
  CLEAR_UI_MESSAGE
} from '../constants';


export const updateCard = (card) => ({
  type: UPDATE_CARD,
  payload: {
    card
  }
});


const setUiMessage = message => ({
  type: SET_UI_MESSAGE,
  payload: {
    message
  }
});


const clearUiMessage = messageId => ({
  type: CLEAR_UI_MESSAGE,
  payload: {
    messageId
  }
});


export const flashUiMessage = message => {
  // code to flash UI message goes here
  // you need redux-thunk in your middleware
}
