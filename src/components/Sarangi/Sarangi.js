import React from 'react';
import PropTypes from 'prop-types';
import Key from '../Key/Key';
import Logger from '../Logger/Logger'; // Import the Logger component
import { NOTE_VALUES } from '../../types/sarangi';
import useSarangiPlayer from '../../hooks/useSarangiPlayer'; // Import the custom hook
import './sarangi.scss';
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';

const keyMapInstructions = {
  'A': 'a', 'A#': 'w',
  'B': 's', 'C': 'd',
  'C#': 'r', 'D': 'f',
  'D#': 't', 'E': 'g',
  'F': 'h', 'F#': 'u',
  'G': 'j', 'G#': 'i'
};

const displayNameMap = {
  'As': 'A#',
  'Cs': 'C#',
  'Ds': 'D#',
  'Fs': 'F#',
  'Gs': 'G#'
};

const Sarangi = () => {
  const { activeNotes, keysLogged, handleClick } = useSarangiPlayer();

  const keys = NOTE_VALUES.map((note) => ({
    note: note,
    isSharp: note.includes('#') || note.includes('s'),
  }));

  return (
    <div className="sarangi-wrapper">
      {/* Left Panel: Instructions */}
      <div className="top-row">
       
      <div className="instructions">
        <h3>Key Mappings</h3>
        <ul>
          {Object.entries(keyMapInstructions).map(([note, key]) => (
            <li key={note} className={activeNotes.includes(note) ? 'active' : ''}>
              <span className="note">
                {displayNameMap[note] || note}
              </span> 
              → Press <b>{key.toUpperCase()}</b>
            </li>
          ))}
        </ul>
      </div>

      {/* Sarangi Keys */}
      <div className="sarangi-container">
        {keys.map(({ note, isSharp }) => (
          <Key
            key={note}
            note={note}
            isSharp={isSharp}
            handleClick={handleClick} // Pass handleClick to Key component
            isActive={activeNotes.includes(note)} // Set active state for key
          />
        ))}
      </div>
</div>
      {/* Logger Component to show played notes below the keyboard */}
      <div className="logger-container">
        <ErrorBoundary>
          <Logger keysLogged={keysLogged} />
        </ErrorBoundary>
      </div>
    </div>
  );
};


Sarangi.propTypes = {
  handleClick: PropTypes.func.isRequired,
};

export default Sarangi;
