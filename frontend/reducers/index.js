import { combineReducers } from 'redux';
import notes from './notes_reducer';


const reducer = combineReducers({
  note: notes
});

export default reducer;
