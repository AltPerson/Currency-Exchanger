import CurrencyListItem from "./CurrencyListItem";

function CurrencyList({ currencyList, baseCurrency }) {
  return (
    <div className="info-list list">
      {Object.entries(currencyList)
        .filter(([key]) => key !== baseCurrency)
        .map(([key, value], index) => {
          return (
            <CurrencyListItem
              key={index}
              name={key}
              value={value}
              baseCurrency={baseCurrency}
            />
          );
        })}
    </div>
  );
}

export default CurrencyList;
