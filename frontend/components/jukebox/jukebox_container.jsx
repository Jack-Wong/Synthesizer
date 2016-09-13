import { connect } from 'react-redux';
import { groupUpdate } from '../../actions/note_actions';
import { startPlaying } from '../../actions/playing_actions';
import { stopPlaying } from '../../actions/playing_actions';
import Jukebox from './jukebox';

const mapStateToProps = (state) => ({
  tracks: state.tracks,
  isRecording: state.isRecording,
  isPlaying: state.isPlaying
});

const mapDispatchToProps = (dispatch) => ({
  onPlay: (track) => (event) => {
    dispatch(startPlaying());
    const playBackStartTime = Date.now();
    let currNote = 0;
    let timeElapsed;
    let interval = setInterval(() => {
      if(currNote < track.roll.length) {
        timeElapsed = Date.now() - playBackStartTime;

        if (timeElapsed > track.roll[currNote].timeslice) {
          dispatch(groupUpdate(track.roll[currNote].notes));
          currNote++;
        }
      } else {
        clearInterval(interval);
        dispatch(stopPlaying());
      }
    }, 1);
  }
});

const ConnectedComponent = connect(
  mapStateToProps,
  mapDispatchToProps
)(Jukebox);

export default ConnectedComponent;
