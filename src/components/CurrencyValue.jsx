import { calculateCurrency } from "../actions/calculateCurrency";

function CurrencyValue({ currencyList, queryOptions }) {
  return (
    <div className="home__currency-info info">
      <h1 className="info__description">
        {calculateCurrency(currencyList, queryOptions)}
      </h1>
    </div>
  );
}

export default CurrencyValue;
