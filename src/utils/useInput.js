import { useState } from 'react';

function useInput(intialValue) {
  const [inputValue, setInputValue] = useState(intialValue);
  function inputChangeHandler(val) {
    setInputValue(val);
  }
  return [inputValue, inputChangeHandler];
}

export default useInput;
