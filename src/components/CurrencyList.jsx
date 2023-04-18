import CurrencyListItem from "./CurrencyListItem";

function CurrencyList({ currencyList, baseCurrency, searchedKey }) {
  const currenciesList = Object.entries(currencyList)
    .filter(([key]) => key !== baseCurrency)
    .filter(([key]) => {
      if (!!searchedKey) {
        if (key === searchedKey) {
          return true;
        }
        return false;
      }
      return true;
    })
    .map(([key, value], index) => {
      return (
        <CurrencyListItem
          key={index}
          name={key}
          value={value}
          baseCurrency={baseCurrency}
        />
      );
    });

  return (
    <div className="info-list list">
      {currenciesList.length >= 1 ? (
        currenciesList
      ) : (
        <div className="info-list__message">Currency didn`t found</div>
      )}
    </div>
  );
}

export default CurrencyList;
