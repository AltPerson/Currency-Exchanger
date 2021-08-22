export const calculateCurrency = (currencyList, queryOptions) => {
  return (
    Object.keys(queryOptions).length !== 0 &&
    `${queryOptions.numberValue} ${queryOptions.firstCurrency} = ${(
      currencyList[queryOptions.secondCurrency] * queryOptions.numberValue
    ).toFixed(2)} ${queryOptions.secondCurrency}`
  );
};
