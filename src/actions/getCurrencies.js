import { setQueryOptions } from "../reducers/currencyReducer";
import { fetchCurrencyList } from "../actions/fetchCurrencyList";

export const getCurrencies = (inputValue, dispatch) => {
  const numberRegex = /\d+.?\d+/g;
  const currenciesRegex = /[a-z]{3}/g;
  const currenciesArray = Array.from(inputValue.matchAll(currenciesRegex));
  let numberValue = Number(Array.from(inputValue.matchAll(numberRegex))[0][0]);
  let firstCurrency;
  let secondCurrency;

  firstCurrency = currenciesArray[0][0].toUpperCase();
  secondCurrency = currenciesArray[1][0].toUpperCase();

  numberValue = Number.isInteger(numberValue)
    ? numberValue
    : numberValue.toFixed(2);

  dispatch(setQueryOptions({ firstCurrency, secondCurrency, numberValue }));
  dispatch(fetchCurrencyList(firstCurrency));
};
