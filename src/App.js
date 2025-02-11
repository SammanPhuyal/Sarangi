import React, { useState, useEffect } from 'react';
import Sarangi from './components/Sarangi/Sarangi';
import Logger from './components/Logger/Logger';
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary';
import useSarangiPlayer from './hooks/useSarangiPlayer';

const App = () => {
  const { strings, activeNotes, handleClick: originalHandleClick } = useSarangiPlayer();
  const [keysLogged, setKeysLogged] = useState([]);

  // Update keysLogged when a note is played
  const handleNoteLogged = (note) => {
    setKeysLogged((prevKeys) => [...prevKeys, note]);
  };

  // Function to handle both mouse and keyboard input
  const handleClick = (note) => {
    originalHandleClick(note); // Call the original handleClick to handle the logic
    handleNoteLogged(note); // Log the played note
  };

  useEffect(() => {
    // Handle keyboard events for note clicks
    const handleKeyDown = (event) => {
      const keyMap = {
        a: 'A',
        w: 'A#',
        s: 'B',
        d: 'C',
        r: 'C#',
        f: 'D',
        t: 'D#',
        g: 'E',
        h: 'F',
        u: 'F#',
        j: 'G',
        i: 'G#',
      };
      
      const note = keyMap[event.key.toLowerCase()];
      if (note) {
        handleClick(note);
      }
    };

    // Attach keyboard listener
    window.addEventListener('keydown', handleKeyDown);

    // Cleanup on component unmount
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [handleClick]);

  return (
    <ErrorBoundary>
      <div className="app">
        <ErrorBoundary>
          <Sarangi
            strings={strings}
            activeNotes={activeNotes}
            handleClick={handleClick}
            keysLogged={keysLogged}
          />
        </ErrorBoundary>
      </div>
    </ErrorBoundary>
  );
};

export default App;
