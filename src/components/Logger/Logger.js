import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { NotePropType } from '../../types/sarangi';
import './Logger.scss';

const Logger = ({ keysLogged }) => {
  const [logWithBreaks, setLogWithBreaks] = useState([keysLogged]); // Start with the first line of notes

  // Handle the Enter key press to insert a line break
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();  // Prevent the default behavior of Enter key
      setLogWithBreaks((prevNotes) => [...prevNotes, []]);  // Start a new line on Enter key press
    }
  };

  // Update logWithBreaks whenever keysLogged changes (from clicking notes)
  useEffect(() => {
    setLogWithBreaks((prevNotes) => {
      const newLog = [...prevNotes];
      // Add new notes to the last line (the last array)
      const lastLine = newLog[newLog.length - 1];
      if (lastLine[lastLine.length - 1] !== keysLogged[keysLogged.length - 1]) {
        lastLine.push(keysLogged[keysLogged.length - 1]);
      }
      return newLog;
    });
  }, [keysLogged]);

  // Ensure the div gets focus when clicked
  useEffect(() => {
    const loggerElement = document.querySelector('.logger');
    if (loggerElement) {
      loggerElement.focus();
    }
  }, []);

  return (
    <div 
      className="logger" 
      onKeyDown={handleKeyPress} 
      tabIndex={0} 
      onClick={() => document.querySelector('.logger').focus()}
    >
      <h3>Notes Played:</h3>
      <div className="notes-log">
        {logWithBreaks.map((line, index) => (
          <div key={`line-${index}`}>
            {line.map((note, noteIndex) => (
              <span key={`${note}-${noteIndex}`}>{note}</span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

Logger.propTypes = {
  keysLogged: PropTypes.arrayOf(NotePropType).isRequired,
};

export default Logger;
