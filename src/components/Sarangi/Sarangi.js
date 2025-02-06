import React from 'react';
import PropTypes from 'prop-types';
import Key from '../Key/Key';
import { NOTE_VALUES } from '../../types/sarangi';
import './sarangi.scss';

const Sarangi = ({ handleClick }) => {
  const keys = NOTE_VALUES.map(note => ({
    note,
    isSharp: note.includes('#'),
  }));

  return (
    <div className="sarangi-container">
      {keys.map(({ note, isSharp }) => (
        <Key
          key={note}
          note={note}
          isSharp={isSharp}
          handleClick={handleClick}
        />
      ))}
    </div>
  );
};

Sarangi.propTypes = {
  handleClick: PropTypes.func.isRequired,
};

export default Sarangi;
