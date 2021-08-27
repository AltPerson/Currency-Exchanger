import { setFetchError } from "../reducers/currencyReducer";
import { useEffect } from "react";

function ErrorHandler({ errorType, dispatch }) {
  useEffect(() => {
    setTimeout(() => {
      dispatch(setFetchError(false));
    }, 3000);
  }, []);
  return (
    <div role="alert" className="error-info">
      {errorType}
    </div>
  );
}

export default ErrorHandler;
