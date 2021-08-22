import { Link } from "react-router-dom";
import { FaThList } from "react-icons/fa";
import { clearCommaInput } from "../actions/clearCommaInput";

function Exchanger({ inputValue, setInputValue, handleButton }) {
  return (
    <div className="home-exchanger exchanger">
      <h1 className="exchanger__title">Currency Exchanger</h1>
      <input
        data-testid="input"
        type="text"
        className="exchanger__input"
        value={inputValue}
        placeholder="15 RUB in USD"
        onChange={(e) => {
          setInputValue(e.target.value);
          clearCommaInput(inputValue, setInputValue);
        }}
      ></input>
      <button
        className="exchanger__btn"
        data-testid="btn"
        onClick={handleButton}
      >
        Calculate
      </button>
      <Link to="/currency" className="exchanger__link link">
        Currency List
        <FaThList className="link-item" />
      </Link>
    </div>
  );
}

export default Exchanger;
