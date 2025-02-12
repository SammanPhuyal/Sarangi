import React, { useState, useEffect } from 'react';
import Sarangi from './components/Sarangi/Sarangi';
import Logger from './components/Logger/Logger';
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary';
import useSarangiPlayer from './hooks/useSarangiPlayer';

// Global object to store loaded sounds
const loadedSounds = {};

// List of sound files mapped to notes
const sounds = [
  { src: "/sounds/a.wav", key: "A" },
  { src: "/sounds/a_sharp.wav", key: "A#" },
  { src: "/sounds/b.wav", key: "B" },
  { src: "/sounds/c.wav", key: "C" },
  { src: "/sounds/c_sharp.wav", key: "C#" },
  { src: "/sounds/d.wav", key: "D" },
  { src: "/sounds/d_sharp.wav", key: "D#" },
  { src: "/sounds/e.wav", key: "E" },
  { src: "/sounds/f.wav", key: "F" },
  { src: "/sounds/f_sharp.wav", key: "F#" },
  { src: "/sounds/g.wav", key: "G" },
  { src: "/sounds/g_sharp.wav", key: "G#" }
];

// Function to preload sound files
const initialize = () => {
  sounds.forEach(({ src, key }) => {
    const audio = document.createElement("audio");
    audio.src = src;
    audio.setAttribute("preload", "auto");
    audio.setAttribute("controls", "none");
    audio.style.display = "none";
    document.body.appendChild(audio);
    loadedSounds[key] = audio;
  });
};

const App = () => {
  const { strings, activeNotes, handleClick: originalHandleClick } = useSarangiPlayer();
  const [keysLogged, setKeysLogged] = useState([]);

  // Call initialize() when component mounts
  useEffect(() => {
    initialize();
  }, []);

  // Update keysLogged when a note is played
  const handleNoteLogged = (note) => {
    setKeysLogged((prevKeys) => [...prevKeys, note]);
  };

  // Function to handle both mouse and keyboard input
  const handleClick = (note) => {
    originalHandleClick(note); // Call the original handleClick
    handleNoteLogged(note); // Log the played note
    
    // Play sound if available
    if (loadedSounds[note]) {
      loadedSounds[note].currentTime = 0; // Reset to play from start
      loadedSounds[note].play();
    }
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
