import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './Key.scss';

// Define black key positions relative to white keys
const BLACK_KEY_OFFSETS = {
  'A#': 57, 'C#': 160, 'D#': 213, 'F#': 265, 'G#': 315
};

const Key = ({ note, isSharp, index, handleClick }) => {
  const [isActive, setIsActive] = useState(false);

  const handleKeyPress = () => {
    if (!note) {
      console.error('Invalid note detected:', note);
      return;
    }
    console.log(`Clicked note: ${note}`);
    setIsActive(true);
    handleClick(note);
    setTimeout(() => setIsActive(false), 200);
  };

  // Map sharp notes (e.g., 'As' to 'A#', 'Cs' to 'C#') for the offset calculation and display
  const mappedNote = isSharp ? note.replace('s', '#') : note;

  // Calculate dynamic black key position for sharp notes
  const blackKeyStyle = isSharp ? { left: `${BLACK_KEY_OFFSETS[mappedNote] || 0}px` } : {};

  return (
    <div
      onClick={handleKeyPress}
      className={`key ${isSharp ? 'black-key' : 'white-key'} ${isActive ? 'active' : ''}`}
      data-note={note}
      style={isSharp ? blackKeyStyle : {}}
    >
      <div className="key-label">
        {/* Display sharp notes as their correct notation */}
        {isSharp ? mappedNote : note}
      </div>
    </div>
  );
};

Key.propTypes = {
  note: PropTypes.string.isRequired,
  isSharp: PropTypes.bool.isRequired,
  index: PropTypes.number.isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default Key;
