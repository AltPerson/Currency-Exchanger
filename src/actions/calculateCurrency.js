export const calculateCurrency = (currencyList, queryOptions) => {
  return (
    Object.keys(queryOptions).length !== 0 &&
    `${queryOptions.numberValue} ${queryOptions.firstCurrency} = ${
      (currencyList[queryOptions.secondCurrency] * queryOptions.numberValue)
        .toString()
        .indexOf(".") !== -1
        ? (
            currencyList[queryOptions.secondCurrency] * queryOptions.numberValue
          ).toFixed(2)
        : currencyList[queryOptions.secondCurrency] * queryOptions.numberValue
    } ${queryOptions.secondCurrency}`
  );
};
