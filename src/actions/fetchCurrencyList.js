import {
  setCurrency,
  setIsFetching,
  setFetchError,
} from "../reducers/currencyReducer";

export function fetchCurrencyList(currencyName = "UAH") {
  return async (dispatch) => {
    try {
      dispatch(setIsFetching(true));
      const response = await fetch(
        `https://v6.exchangerate-api.com/v6/${process.env.REACT_APP_API_KEY}/latest/${currencyName}`
      );
      const data = await response.json();
      if (data.result === "success") {
        dispatch(setCurrency(data));
      } else {
        throw Error(data["error-type"]);
      }
    } catch (e) {
      dispatch(setFetchError(true, e.message));
    }
  };
}
