import React from 'react';
import PropTypes from 'prop-types';
import { NotePropType } from '../../types/sarangi';
import './Logger.scss';

const Logger = ({ keysLogged }) => {
  return (
    <div className="logger">
      <h3>Notes Played:</h3>
      <div className="notes-log">
        {keysLogged.map((note, index) => (
          <span key={`${note}-${index}`}>{note}</span>
        ))}
      </div>
    </div>
  );
};

Logger.propTypes = {
  keysLogged: PropTypes.arrayOf(NotePropType).isRequired,
};

export default Logger;
