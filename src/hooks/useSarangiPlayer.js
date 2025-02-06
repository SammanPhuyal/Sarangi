// src/hooks/useSarangiPlayer.js
import { useState, useEffect } from 'react';
import { NOTE_VALUES } from '../types/sarangi';

const useSarangiPlayer = () => {
  const [keysLogged, setKeysLogged] = useState([]);

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

  const playNote = (note) => {
    new Audio(`/sounds/${note}.wav`)
      .play()
      .catch(err => console.error('Audio error:', err));
  };

  const handleClick = (note) => {
    setKeysLogged(prev => [...prev, note]);
    playNote(note);
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      const note = keyMap[e.key.toLowerCase()];
      if (note) {
        handleClick(note);
        e.preventDefault();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleClick, keyMap]);

  return { keysLogged, handleClick };
};

export default useSarangiPlayer;