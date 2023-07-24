import { Link } from 'react-router-dom';
import { FaThList } from 'react-icons/fa';
import { clearCommaInput } from '../actions/clearCommaInput';
import { useRef } from 'react';

function Exchanger({ inputValue, setInputValue, handleButton }) {
  const inputRef = useRef();
  const onKeyDownHandler = (e) => {
    if (e.code === 'Escape') {
      setInputValue('');
      if (inputRef.current && inputValue === '') {
        inputRef.current.blur();
      }
    }
    if (e.code === 'Enter' || e.code === 'NumpadEnter') {
      handleButton();
    }
  };
  return (
    <div className="home-exchanger exchanger">
      <h1 className="exchanger__title">Currency Exchanger</h1>
      <input
        data-testid="input"
        type="text"
        className="exchanger__input"
        value={inputValue}
        placeholder="15 UAH in USD"
        onKeyDown={onKeyDownHandler}
        ref={inputRef}
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
