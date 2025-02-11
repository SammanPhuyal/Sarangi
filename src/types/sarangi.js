// src/types/sarangi.js
import PropTypes from 'prop-types';

// Define Sarangi notes
export const NOTE_VALUES = ['A', 'As', 'B', 'C', 'Cs', 'D', 'Ds', 'E', 'F', 'Fs', 'G', 'Gs'];

// PropTypes for a Sarangi note
export const NotePropType = PropTypes.oneOf(NOTE_VALUES);

// PropTypes for a Sarangi string
export const StringPropType = PropTypes.shape({
  note: NotePropType.isRequired,
  isActive: PropTypes.bool.isRequired,
});

// PropTypes for an array of strings
export const StringsPropType = PropTypes.arrayOf(StringPropType);