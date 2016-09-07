import React from 'react';
import ReactDOM from 'react-dom';

class Recorder extends React.Component {
  constructor(props){
    super(props)
  };

  render(startRecording, stopRecording, isRecording) {
    return(
      <div>
      <button className="state-button" onClick={this.props.startRecording} disabled={this.props.isRecording}>Start</button>
      <button className="stop-botton" onClick={this.props.stopRecording} disabled={!this.props.isRecording}>Stop</button>
      </div>
    )
  };
};

export default Recorder;
