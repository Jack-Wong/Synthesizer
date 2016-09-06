import React from 'react';
import ReactDOM from 'react-dom';
import { NOTE_NAMES } from '../../util/tones';
import { TONES } from '../../util/tones';
import Note from '../../util/note';
import $ from 'jquery';
import NoteKey from './note_key';
import { keyMap } from '../../reducers/notes_reducer';

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
    $(document).on('keydown', event => this.onKeyDown(event));
    $(document).on('keyup', event => this.onKeyUp(event));
  };

  playNotes() {
    NOTE_NAMES.forEach((note, idx) => {
      const mapNote = [];
      this.props.notes.forEach( propNote => {
        mapNote.push(keyMap[propNote]);
      })
      if(mapNote.indexOf(note) === -1) {
        this.notes[idx].stop();
      } else {
        this.notes[idx].start();
      }
    });
  };

  render() {
    const noteKeys = this.notes.map((note, index) => {
      return <NoteKey key={index} note={note}/>
    });
    this.playNotes();

    return(
      <div>
        {noteKeys}
      </div>
    );
  }
};

export default Synth;
