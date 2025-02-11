import React from 'react';
import PropTypes from 'prop-types';
import Key from '../Key/Key';
import { NOTE_VALUES } from '../../types/sarangi';
import useSarangiPlayer from '../../hooks/useSarangiPlayer'; // Import the custom hook
import './sarangi.scss';

// Mapping for the instructions panel
const keyMapInstructions = {
  'A': 'a', 'A#': 'w',
  'B': 's', 'C': 'd',
  'C#': 'r', 'D': 'f',
  'D#': 't', 'E': 'g',
  'F': 'h', 'F#': 'u',
  'G': 'j', 'G#': 'i'
};

// Map notes with 's' to their sharp equivalent for display
const displayNameMap = {
  'As': 'A#',
  'Cs': 'C#',
  'Ds': 'D#',
  'Fs': 'F#',
  'Gs': 'G#'
};

const Sarangi = () => {
  const { activeNotes, handleClick } = useSarangiPlayer();

  const keys = NOTE_VALUES.map((note) => ({
    note: note,
    isSharp: note.includes('#') || note.includes('s'),
  }));

  return (
    <div className="sarangi-wrapper">
      {/* Left Panel: Instructions */}
      <div className="instructions">
        <h3>Key Mappings</h3>
        <ul>
          {Object.entries(keyMapInstructions).map(([note, key]) => (
            <li key={note} className={activeNotes.includes(note) ? 'active' : ''}>
              <span className="note">
                {/* Map 's' to sharp note for display */}
                {displayNameMap[note] || note}
              </span> 
              → Press <b>{key.toUpperCase()}</b>
            </li>
          ))}
        </ul>
      </div>

      {/* Piano Keys */}
      <div className="sarangi-container">
        {keys.map(({ note, isSharp }) => (
          <Key
            key={note}
            note={note}
            isSharp={isSharp}
            handleClick={handleClick} // Use the updated handler
          />
        ))}
      </div>
    </div>
  );
};

Sarangi.propTypes = {
  handleClick: PropTypes.func.isRequired,
};

export default Sarangi;
