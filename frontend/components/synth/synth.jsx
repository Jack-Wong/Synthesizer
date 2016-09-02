import React from 'react';
import ReactDOM from 'react-dom';
import { NOTE_NAMES } from '../../util/tones';
import { TONES } from '../../util/tones';
import Note from '../../util/note';
import $ from 'jquery';


class Synth extends React.Component {
  constructor(props){
    super(props);
    this.notes = NOTE_NAMES.map(note => {
      const newNote = new Note(TONES[note]);
      newNote.name = note;
      return newNote;
    });
  };

  onKeyDown(event) {
    var keyName = event.key;
    this.props.keyPressed(keyName);
  };

  onKeyUp(event) {
    var keyName = event.key;
    this.props.keyReleased(keyName);
  };

  componentDidMount() {
    $(document).on('keydown', event => onKeyDown(event));
    $(document).on('keyup', event => onKeyUp(event));
  };

  render() {
    console.log(this.notes);
    const displayNotes = this.notes.map((note, index) => {
      return <li key={index}>{note.name}</li>
    });

    return(
      <ul>
        {displayNotes}
      </ul>
    );
  }
};

export default Synth;
