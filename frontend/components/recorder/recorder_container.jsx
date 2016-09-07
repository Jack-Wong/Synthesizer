import { connect } from 'react-redux';
import Recorder from './recorder';
import { startRecording } from '../../actions/tracks_actions';
import { stopRecording } from '../../actions/tracks_actions';

const mapStateToProps = (state) => ({
  tracks: state.tracks,
  isRecording: state.isRecording
});

const mapDispatchToProps = (dispatch) => ({
  startRecording: () => dispatch(startRecording()),
  stopRecording: () => dispatch(stopRecording())
});

const ConnectedComponent = connect(
  mapStateToProps,
  mapDispatchToProps
)(Recorder);

export default ConnectedComponent;
