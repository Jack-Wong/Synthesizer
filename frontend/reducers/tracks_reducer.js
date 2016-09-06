import TracksConstants from '../actions/tracks_actions';
import merge from 'lodash/merge';

var currTrackId = 0;

const tracks = (state = {}, action) => {
  switch(action.type) {
    case "START_RECORDING":
      currTrackId++
      var nextState = merge({}, state);
      let newTrack = {
        id: currTrackId,
        name: "Track" + currTrackId,
        roll: [],
        timeStart: action.timeNow
      };
      nextState[currTrackId] = newTrack;
      return nextState;
    case "STOP_RECORDING":
      var nextState = merge({},state);
      let endTrack = {
        roll: [],
        timeslice: action.timeNow - state[currTrackId].timeStart
      };
      nextState[currTrackId] = endTrack;
      return nextState;
    case "ADD_NOTES":
      var nextState = merge({}, state);
      let addNote = {
        roll: [action.notes],
        timeslice: action.timeNow - state[currTrackId].timeStart
      };
      nextState[currTrackId] = addNote;
      return nextState;
    default:
      return state;
  }
};

export default tracks;
