import React from 'react';
import ReactDOM from 'react-dom';

class Track extends React.Component {
  constructor(props) {
    super(props);
  };

  render() {

    return(
      <div>
        {this.props.track.name}
        <div>
          <button onClick={this.props.onPlay(this.props.track)}>Play</button>
        </div>
      </div>
    )
  }
}

export default Track;
