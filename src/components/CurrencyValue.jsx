import { calculateCurrency } from "../actions/calculateCurrency";
import { setFetchError } from "../reducers/currencyReducer.js";

function CurrencyValue({ currencyList, queryOptions, dispatch }) {
  if (!Object.keys(currencyList).includes(queryOptions.secondCurrency)) {
    dispatch(
      setFetchError(true, `Unsupported code [${queryOptions.secondCurrency}]`)
    );
    return "";
  }
  return (
    <div className="home__currency-info info">
      <h1 className="info__description">
        {calculateCurrency(currencyList, queryOptions)}
      </h1>
    </div>
  );
}

export default CurrencyValue;
