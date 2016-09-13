import React from 'react';
import ReactDOM from 'react-dom';

class Recorder extends React.Component {
  constructor(props){
    super(props)
  };

  render() {
    const {startRecording, stopRecording, isRecording, isPlaying} = this.props;
    return(
      <div>
      <button onClick={startRecording} disabled={isRecording || isPlaying}>Start</button>
      <button onClick={stopRecording} disabled={!isRecording || isPlaying}>Stop</button>
      </div>
    )
  };
};

export default Recorder;
