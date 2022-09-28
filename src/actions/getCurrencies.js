import { setQueryOptions, setFetchError } from "../reducers/currencyReducer";
import { fetchCurrencyList } from "../actions/fetchCurrencyList";

export const getCurrencies = (inputValue, dispatch) => {
  let numberValue = [];
  let firstCurrency = [];
  let secondCurrency = [];
  let tempCurrency = [];
  if (!Number.isInteger(parseInt(inputValue[0]))) {
    dispatch(setFetchError(true, "Incorrect query"));
    return;
  }
  for (let char in inputValue) {
    if (Number.isInteger(+inputValue[char]) || inputValue[char] === ".") {
      numberValue.push(inputValue[char]);
    }
    if (
      inputValue[char] !== " " &&
      !Number.isInteger(+inputValue[char]) &&
      inputValue[char] !== "."
    ) {
      if (firstCurrency.length === 0 || secondCurrency.length === 0) {
        if (tempCurrency.length < 3) {
          if (inputValue[+char + 1] === " " && tempCurrency.length < 2) {
            tempCurrency = [];
          } else {
            tempCurrency.push(inputValue[char]);
            if (tempCurrency.length === 3) {
              if (firstCurrency.length === 0) {
                firstCurrency = [...tempCurrency];
                tempCurrency = [];
              } else {
                secondCurrency = [...tempCurrency];
                tempCurrency = [];
              }
            }
          }
        }
      }
    }
  }
  firstCurrency = firstCurrency.join("").toUpperCase();
  secondCurrency = secondCurrency.join("").toUpperCase();
  numberValue = numberValue.includes(".")
    ? Number(numberValue.filter((item) => item !== " ").join("")).toFixed(2)
    : Number(numberValue.filter((item) => item !== " ").join(""));
  dispatch(setQueryOptions({ firstCurrency, secondCurrency, numberValue }));
  dispatch(fetchCurrencyList(firstCurrency));
};
