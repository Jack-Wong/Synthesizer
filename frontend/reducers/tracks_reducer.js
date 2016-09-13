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
        name: "Track " + currTrackId,
        roll: [],
        timeStart: action.timeStart
      };
      nextState[currTrackId] = newTrack;
      return nextState;
    case "STOP_RECORDING":
      var nextState = merge({},state);
      let endNote = {
        notes: [],
        timeslice: action.timeNow - state[currTrackId].timeStart
      };
      nextState[currTrackId].roll.push(endNote);
      return nextState;
    case "ADD_NOTES":
      var nextState = merge({}, state);
      let addNote = {
        notes: [action.notes],
        timeslice: action.timeNow - state[currTrackId].timeStart
      };
      nextState[currTrackId].roll.push(addNote);
      return nextState;
    default:
      return state;
  }
};

export default tracks;
