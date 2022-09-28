export const calculateCurrency = (currencyList, queryOptions) => {
  return (
    Object.keys(queryOptions).length !== 0 &&
    `${queryOptions.numberValue} ${queryOptions.firstCurrency} = ${
      (currencyList[queryOptions.secondCurrency] * queryOptions.numberValue)
        .toString()
        .indexOf(".") !== -1
        ? (
            currencyList[queryOptions.secondCurrency] * queryOptions.numberValue
          ).toFixed(3)
        : currencyList[queryOptions.secondCurrency] * queryOptions.numberValue
    } ${queryOptions.secondCurrency}`
  );
};
