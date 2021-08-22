import CurrencyFlag from "react-currency-flags";

function CurrencyListItem({ name, baseCurrency, value }) {
  return (
    <>
      <div className="list__item item">
        <div className="item__flag-origin">
          <CurrencyFlag currency={name} size="xl" />
        </div>
        <div className="item__description">
          {`1 ${baseCurrency} = ${value.toFixed(2)} ${name}`}
        </div>
      </div>
    </>
  );
}

export default CurrencyListItem;
