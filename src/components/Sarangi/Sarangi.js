import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Key from '../Key/Key';
import Logger from '../Logger/Logger';
import { NOTE_VALUES } from '../../types/sarangi';
import useSarangiPlayer from '../../hooks/useSarangiPlayer';
import './sarangi.scss';
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';

const keyMapInstructions = {
  'A': 'a', 'A#': 'w',
  'B': 's', 'C': 'd',
  'C#': 'r', 'D': 'f',
  'D#': 't', 'E': 'g',
  'F': 'h', 'F#': 'u',
  'G': 'j', 'G#': 'i',
  'Stop Sound': 'Space',
  'Line Break`': 'Enter',

};

const Sarangi = () => {
  const { activeNotes, keysLogged, handleClick } = useSarangiPlayer();
  const [colorScheme, setColorScheme] = useState('wooden'); // Default color scheme

  const handleColorChange = (e) => {
    setColorScheme(e.target.value); // Update color scheme based on selection
  };

  const keys = NOTE_VALUES.map((note) => ({
    note: note,
    isSharp: note.includes('#') || note.includes('s'),
  }));

  const firstHalfInstructions = Object.entries(keyMapInstructions).slice(0, Math.ceil(Object.entries(keyMapInstructions).length / 2));
  const secondHalfInstructions = Object.entries(keyMapInstructions).slice(Math.ceil(Object.entries(keyMapInstructions).length / 2));

  return (
    <div className={`sarangi-wrapper ${colorScheme}`}>
      <div className="top-row">
        <div className="instructions">
          {/* Color Scheme Selector */}
          <div className="color-scheme-selector">
            <label htmlFor="color-scheme">Choose Key Color Scheme: </label>
            <div className="color-options">
              <button 
                value="wooden" 
                style={{ backgroundColor: '#8b6f47' }} 
                onClick={handleColorChange} 
                aria-label="Wooden Theme"
              />
              <button 
                value="earthy" 
                style={{ backgroundColor: '#ffffff' }} 
                onClick={handleColorChange} 
                aria-label="Earthy Theme"
              />
              <button 
                value="classic" 
                style={{ backgroundColor: '#d8d0b0' }} 
                onClick={handleColorChange} 
                aria-label="Classic Theme"
              />
              <button 
                value="serene" 
                style={{ backgroundColor: '#d2e4f0' }} 
                onClick={handleColorChange} 
                aria-label="Serene Theme"
              />
              <button 
                value="vibrant" 
                style={{ backgroundColor: ' #666808' }} 
                onClick={handleColorChange} 
                aria-label="Vibrant Theme"
              />
              <button 
                value="mystic" 
                style={{ backgroundColor: '#3c2a5b' }} 
                onClick={handleColorChange} 
                aria-label="Mystic Theme"
              />
              <button 
                value="sunset" 
                style={{ backgroundColor: '#1a6017' }} 
                onClick={handleColorChange} 
                aria-label="Sunset Theme"
              />
            </div>
          </div>

          <h3>Key Press Instructions</h3>
          <div className="note-container">
            <div className="left-column">
              {firstHalfInstructions.map(([note, key]) => (
                <div
                  key={note}
                  className={`note ${activeNotes.includes(note) ? 'active' : ''}`}
                  onClick={() => handleClick(note)}
                >
                  <span className="note-name">{note}</span> →{' '}
                  Press <b>
                    <span className={`key-like-text ${activeNotes.includes(note) ? 'active' : ''}`}>{key.toUpperCase()}</span>
                  </b>
                </div>
              ))}
            </div>
            <div className="right-column">
              {secondHalfInstructions.map(([note, key]) => (
                <div
                  key={note}
                  className={`note ${activeNotes.includes(note) ? 'active' : ''}`}
                  onClick={() => handleClick(note)}
                >
                  <span className="note-name">{note}</span> →{' '}
                  {note === 'Spacebar' ? (
                    <b>
                      <span
                        className={`key-like-text-spacebar ${activeNotes.includes(note) ? 'active' : ''}`}
                      >
                        {key.toUpperCase()}
                      </span>
                    </b>
                  ) : (
                    <b>
                      <span
                        className={`key-like-text ${activeNotes.includes(note) ? 'active' : ''}`}
                      >
                        {key.toUpperCase()}
                      </span>
                    </b>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className={`sarangi-container ${colorScheme}`}>
          {keys.map(({ note, isSharp }) => (
            <Key
              key={note}
              note={note}
              isSharp={isSharp}
              handleClick={handleClick}
              isActive={activeNotes.includes(note)}
              colorScheme={colorScheme}
            />
          ))}
        </div>
      </div>

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
