import NotesConstants from '../actions/note_actions';
import NOTE_NAMES from '../util/tones';

const validKeys = ["a", "s", "d", "f", "g"];
export const keyMap = {
  'a': 'C5',
  's': 'D5',
  'd': 'E5',
  'f': 'F5',
  'g': 'G5'
}

const notes = (state = [], action) => {
  const idx = state.indexOf(action.key);
  switch(action.type) {
    case "KEY_PRESSED":
      if(validKeys.indexOf(action.key) === -1){
        return state;
      }
      if(idx === -1) {
        return [
          ...state,
          action.key
        ];
      } else {
        return state;
      }
    case "KEY_RELEASED":
      if(validKeys.indexOf(action.key) === -1){
        return state;
      }
      if(idx !== -1) {
        return [
          ...state.slice(0,idx),
          ...state.slice(idx + 1)
        ];
      } else {
        return state;
      }
    default:
      return state;
  }
};

export default notes;
