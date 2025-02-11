import { useState, useEffect } from 'react';

// Custom hook for Sarangi player logic
const useSarangiPlayer = () => {
  const [keysLogged, setKeysLogged] = useState([]); // Keeps track of notes pressed
  const [activeNotes, setActiveNotes] = useState([]); // Active notes for UI update

  // Keyboard mapping for Sarangi notes
  const keyMap = {
    'a': 'A',
    'w': 'A#',
    's': 'B',
    'd': 'C',
    'r': 'C#',
    'f': 'D',
    't': 'D#',
    'g': 'E',
    'h': 'F',
    'u': 'F#',
    'j': 'G',
    'i': 'G#'
  };

  // Map sharp notes to their correct sound file names
  const noteMap = {
    'A': 'a',
    'A#': 'as', // A# mapped to 'as'
    'B': 'b',
    'C': 'c',
    'C#': 'cs', // C# mapped to 'cs'
    'D': 'd',
    'D#': 'ds', // D# mapped to 'ds'
    'E': 'e',
    'F': 'f',
    'F#': 'fs', // F# mapped to 'fs'
    'G': 'g',
    'G#': 'gs'  // G# mapped to 'gs'
  };

  // Play sound for the note
  const playNote = (note) => {
    const soundFile = noteMap[note] || note;  // Get the correct sound file name
    const audio = new Audio(`/sounds/${soundFile}.wav`);
    audio.play().catch(err => console.error('Audio error:', err));
  };

  // Handle note click (either by mouse or keyboard)
  const handleClick = (note) => {
    setKeysLogged((prev) => [...prev, note]);

    // Add note to active state (for UI highlight)
    setActiveNotes((prevNotes) => {
      if (!prevNotes.includes(note)) {
        return [...prevNotes, note];
      }
      return prevNotes;
    });

    playNote(note);

    // Reset active note after 500ms
    setTimeout(() => {
      setActiveNotes((prevNotes) => prevNotes.filter((n) => n !== note));
    }, 500);
  };

  // Keyboard event listener
  useEffect(() => {
    const handleKeyDown = (e) => {
      const note = keyMap[e.key.toLowerCase()];
      if (note) {
        handleClick(note);
        e.preventDefault(); // Prevent default browser behavior (e.g., page scroll)
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    // Clean up event listener on component unmount
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return { keysLogged, activeNotes, handleClick };
};

export default useSarangiPlayer;
