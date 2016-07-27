import uuid from 'uuid';
import {
  UPDATE_CARD,
  SET_UI_MESSAGE,
  CLEAR_UI_MESSAGE,
  UI_MESSAGE_TIMEOUT
} from '../constants';


export const updateCard = (card) => ({
  type: UPDATE_CARD,
  payload: {
    card
  }
});


const setUiMessage = ({messageId, message}) => ({
  type: SET_UI_MESSAGE,
  payload: {
    message,
    messageId
  }
});


const clearUiMessage = messageId => ({
  type: CLEAR_UI_MESSAGE,
  payload: {
    messageId
  }
});


export const flashUiMessage = function(message) {
  return function(dispatch) {
    const uiMessageId = uuid.v4();

    dispatch(setUiMessage({
      message,
      messageId: uiMessageId
    }));

    const timeoutId = setTimeout(function() {
      clearTimeout(timeoutId);
      dispatch(clearUiMessage(uiMessageId));
    }, UI_MESSAGE_TIMEOUT + 1000);
  };
};
