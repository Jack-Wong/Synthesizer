import React from 'react';
import ReactDOM from 'react-dom';
import Track from './track'

class JukeBox extends React.Component {
  constructor(props){
    super(props)
  }

  render() {
    const {isPlaying, tracks, isRecording, onPlay} = this.props;
    const array = Object.keys(tracks).map(trackId => {
      return <Track track={tracks[trackId]} key={trackId} onPlay={onPlay}/>
    });
    console.log(array);
    return(
      <div>
        {array}
      </div>
    )
  };
};

export default JukeBox;
