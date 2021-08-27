import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchCurrencyList } from "../../actions/fetchCurrencyList";
import CurrencyList from "../CurrencyList";
import CurrencySelector from "../CurrencySelector";
import Loader from "react-loader-spinner";
import { setQueryOptions } from "../../reducers/currencyReducer";

import "./Info.css";

function Info() {
  const dispatch = useDispatch();
  const { baseCurrency, currencyList, isFetching } = useSelector(
    (state) => state
  );
  const handleChange = (e) => {
    dispatch(fetchCurrencyList(e.target.value));
  };
  useEffect(() => {
    dispatch(setQueryOptions({}));
    dispatch(fetchCurrencyList());
  }, []);
  return (
    <div className="currency-info currency">
      <div className="currency-wrapper">
        {isFetching ? (
          <div className="currency-loader">
            <Loader
              type="TailSpin"
              color="blue"
              height={100}
              width={100}
              timeout={3000}
            />
          </div>
        ) : (
          <>
            <CurrencySelector
              baseCurrency={baseCurrency}
              currencyList={currencyList}
              handleChange={handleChange}
            />
            <CurrencyList
              baseCurrency={baseCurrency}
              currencyList={currencyList}
            />
          </>
        )}
      </div>
    </div>
  );
}

export default Info;
