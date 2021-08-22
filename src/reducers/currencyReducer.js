const SET_CURRENCY = "SET_CURRENCY";
const SET_IS_FETCHING = "SET_IS_FETCHING";
const SET_FETCH_ERROR = "SET_FETCH_ERROR";
const SET_CURRENCY_SUM = "SET_CURRENCY_SUM";
const SET_QUERY_OPTIONS = "SET_QUERY_OPTIONS";

const defaultState = {
  baseCurrency: "",
  queryOptions: {},
  currencyList: {},
  isFetching: false,
  currencySum: "",
  fetchError: {
    isError: false,
    errorMsg: "",
  },
};

export const currencyReducer = (state = defaultState, action) => {
  switch (action.type) {
    case SET_CURRENCY:
      return {
        ...state,
        baseCurrency: action.payload.baseCurrency,
        currencyList: action.payload.currencyList,
        isFetching: false,
      };
    case SET_IS_FETCHING:
      return {
        ...state,
        isFetching: action.payload,
      };
    case SET_FETCH_ERROR:
      return {
        ...state,
        queryOptions: {},
        isFetching: action.payload.status,
        fetchError: {
          isError: action.payload.status,
          errorMsg: action.payload.msg,
        },
      };
    case SET_CURRENCY_SUM:
      return {
        ...state,
        currencySum: action.payload,
      };
    case SET_QUERY_OPTIONS:
      return {
        ...state,
        queryOptions: {
          firstCurrency: action.payload.firstCurrency,
          secondCurrency: action.payload.secondCurrency,
          numberValue: action.payload.numberValue,
        },
      };
    // case SET_IS_NOT_SUBMIT:
    //   return {
    //     ...state,
    //     notIsSubmitted: action.payload,
    //   };
    default:
      return { ...state };
  }
};

export const setCurrency = (data) => {
  return {
    type: SET_CURRENCY,
    payload: {
      baseCurrency: data.base_code,
      currencyList: data.conversion_rates,
    },
  };
};

export const setIsFetching = (bool) => ({
  type: SET_IS_FETCHING,
  payload: bool,
});

export const setFetchError = (bool, msg = "") => ({
  type: SET_FETCH_ERROR,
  payload: {
    status: bool,
    msg,
  },
});

export const setCurrencySum = (sum) => ({
  type: SET_CURRENCY_SUM,
  payload: sum,
});

export const setQueryOptions = ({
  firstCurrency,
  secondCurrency,
  numberValue,
}) => ({
  type: SET_QUERY_OPTIONS,
  payload: { firstCurrency, secondCurrency, numberValue },
});
