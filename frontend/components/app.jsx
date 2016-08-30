import React from 'react';
import ReactDOM from 'react-dom';
import SynthContainer from './synth/synth_container';

class App extends React.Component {
  render () {
    return(
      <div>
        <SynthContainer/>
      </div>
    );
  }
};

export default App;
