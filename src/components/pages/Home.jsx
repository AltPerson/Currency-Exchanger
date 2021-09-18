import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getCurrencies } from "../../actions/getCurrencies";
import { setFetchError } from "../../reducers/currencyReducer";
import Loader from "react-loader-spinner";
import ErrorHandler from "../ErrorHandler";
import Exchanger from "../Exchanger";
import "./Home.css";
import CurrencyValue from "../CurrencyValue";

function Home() {
  const dispatch = useDispatch();
  const isFetching = useSelector((state) => state.isFetching);
  const [inputValue, setInputValue] = useState("");
  const currencyList = useSelector((state) => state.currencyList);
  const fetchError = useSelector((state) => state.fetchError);
  const queryOptions = useSelector((state) => state.queryOptions);

  const handleButton = () => {
    if (inputValue.length < 1) {
      dispatch(setFetchError(true, "Empty query"));
      return;
    }
    if (inputValue.length < 12) {
      dispatch(setFetchError(true, "Short query"));
      setInputValue("");
      return;
    }
    getCurrencies(inputValue.replace(/,/gi, "."), dispatch, currencyList);
    setInputValue("");
  };
  return (
    <div className="home">
      <div className="home-wrapper">
        <Exchanger
          data-testid="exchanger"
          inputValue={inputValue}
          setInputValue={setInputValue}
          handleButton={handleButton}
        />
      </div>
      {fetchError.isError ? (
        <ErrorHandler dispatch={dispatch} errorType={fetchError.errorMsg} />
      ) : isFetching ? (
        <div className="home-loader" style={{ marginTop: "10px" }}>
          <Loader
            type="TailSpin"
            color="blue"
            height={100}
            width={100}
            timeout={3000}
          />
        </div>
      ) : queryOptions.firstCurrency === undefined ||
        Object.keys(queryOptions).length === 0 ? (
        ""
      ) : (
        <CurrencyValue
          currencyList={currencyList}
          queryOptions={queryOptions}
          dispatch={dispatch}
        />
      )}
    </div>
  );
}

export default Home;
