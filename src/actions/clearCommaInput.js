export const clearCommaInput = (inputValue, setInputValue) => {
  for (let char of inputValue) {
    if (char === ",") {
      setInputValue(inputValue.replace(/,/gi, "."));
    }
  }
};
