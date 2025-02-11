import React from 'react';
import PropTypes from 'prop-types';
import './Key.scss';

// Define black key positions relative to white keys
const BLACK_KEY_OFFSETS = {
  'A#': 57, 'C#': 160, 'D#': 213, 'F#': 265, 'G#': 315
};

const Key = ({ note, isSharp, handleClick, isActive }) => {
  const handleKeyPress = () => {
    if (!note) {
      console.error('Invalid note detected:', note);
      return;
    }
    console.log(`Clicked note: ${note}`);
    handleClick(note); // This will send the correct note value
  };

  const mappedNote = isSharp ? note.replace('s', '#') : note;
  const blackKeyStyle = isSharp ? { left: `${BLACK_KEY_OFFSETS[mappedNote] || 0}px` } : {};

  return (
    <div
      onClick={handleKeyPress} // Trigger handleClick when clicked
      className={`key ${isSharp ? 'black-key' : 'white-key'} ${isActive ? 'active' : ''}`}
      data-note={note}
      style={isSharp ? blackKeyStyle : {}}
    >
      <div className="key-label">
        {isSharp ? mappedNote : note}
      </div>
    </div>
  );
};

Key.propTypes = {
  note: PropTypes.string.isRequired, // Make sure 'note' is a required prop
  isSharp: PropTypes.bool.isRequired,
  handleClick: PropTypes.func.isRequired, // handleClick function should be passed down as prop
  isActive: PropTypes.bool.isRequired,
};

export default Key;
