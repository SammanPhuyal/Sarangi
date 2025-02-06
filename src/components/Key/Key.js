import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './Key.scss';

const Key = ({ note, isSharp, handleClick }) => {
  const [isActive, setIsActive] = useState(false);

  const handleKeyPress = () => {
    if (!note) {
      console.error('Invalid note detected:', note);
      return;
    }
    console.log(`Clicked note: ${note}`); // Debugging log
    setIsActive(true);
    handleClick(note);
    setTimeout(() => setIsActive(false), 200); // Brief highlight effect
  };

  return (
    <div
      onClick={handleKeyPress}
      className={`key ${isSharp ? 'black-key' : 'white-key'} ${isActive ? 'active' : ''}`}
      data-note={note}
    >
      <div className="key-label">{note}</div>
    </div>
  );
};

Key.propTypes = {
  note: PropTypes.string.isRequired,
  isSharp: PropTypes.bool.isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default Key;
