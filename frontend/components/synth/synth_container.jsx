import { connect } from 'react-redux';
import Synth from './synth';
import { keyPressed } from '../../actions/note_actions';
import { keyReleased } from '../../actions/note_actions';

const mapStateToProps = (state) => ({
  notes: state.notes
});

const mapDispatchToProps = (dispatch) => ({
  keyPressed: key => dispatch(keyPressed(key)),
  keyReleased: key => dispatch(keyReleased(key))
});

const ConnectedComponent = connect(
  mapStateToProps,
  mapDispatchToProps
)(Synth);

export default ConnectedComponent;
