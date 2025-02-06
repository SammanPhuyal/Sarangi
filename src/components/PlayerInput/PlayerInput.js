import React, { useState, useCallback } from 'react';
import PropTypes from 'prop-types';

const PlayerInput = ({ handleSubmit, setIsInputFocused }) => {
  const [userInputArray, setUserInputArray] = useState([]);
  const [userInput, setUserInput] = useState('');
  const [inputValid, setInputValid] = useState(false);

  const validateString = useCallback((value) => {
    return /^([CcDdEFfGgAaB]{1},)*[CcDdEFfGgAaB]$/.test(value);
  }, []);

  const handleChange = useCallback((value) => {
    const cleanValue = value.replace(/[^CcDdEFfGgAaB]/g, '');
    const formattedValue = cleanValue.split('').join(',');
    const newInputArray = formattedValue.split(',');

    setUserInputArray(newInputArray);
    setUserInput(formattedValue);
    setInputValid(validateString(formattedValue));
  }, [validateString]);

  return (
    <div className='player-input-wrapper'>
      {inputValid ? <div><span className='valid-input'>√</span> Valid Input</div> : <div><span className='invalid-input'>X</span> Invalid Input</div>}
      <div className='player-input'>
        <textarea
          onChange={(e) => handleChange(e.target.value)}
          value={userInput}
          placeholder="Enter notes separated by commas (e.g., C,D,E)"
        />
        <button
          className='submit-playlist'
          disabled={!inputValid}
          onClick={() => handleSubmit(userInputArray)}
        >
          Submit
        </button>
      </div>
    </div>
  );
};

PlayerInput.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  setIsInputFocused: PropTypes.func.isRequired
};

export default PlayerInput;
