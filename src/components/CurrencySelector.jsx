import CurrencyFlag from "react-currency-flags";
import { FcSearch } from "react-icons/fc";
import { Link } from "react-router-dom";

function CurrencySelector({ baseCurrency, currencyList, handleChange }) {
  return (
    <div className="info-selected__currency currency_selector selector">
      <div className="selector__title">Selected Currency:</div>
      <div className="selector__flag">
        <CurrencyFlag currency={baseCurrency} size="xl" />
      </div>
      <div className="selector__body">
        <select value={baseCurrency} onChange={handleChange}>
          {Object.keys(currencyList).map((key, index) => (
            <option key={index} value={key}>
              {key}
            </option>
          ))}
        </select>
      </div>
      <Link to="/">
        <FcSearch className="selector__search" />
      </Link>
    </div>
  );
}

export default CurrencySelector;
