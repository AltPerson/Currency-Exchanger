import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import App from "../App";
import { createStore, applyMiddleware } from "redux";
import "@testing-library/jest-dom";
import { currencyReducer } from "../reducers/currencyReducer";
import thunk from "redux-thunk";

describe("Input error catching", () => {
  it("if input empty", () => {
    const store = createStore(currencyReducer, applyMiddleware(thunk));
    const { getByTestId } = render(
      <Provider store={store}>
        <App />
      </Provider>
    );
    const input = getByTestId("input");
    const btn = getByTestId("btn");
    expect(input.value).toBe("");
    fireEvent.click(btn);
    screen.getByText("Empty query");
  });
  it("if input data is incorrect", () => {
    const store = createStore(currencyReducer, applyMiddleware(thunk));
    const { getByTestId } = render(
      <Provider store={store}>
        <App />
      </Provider>
    );
    const input = getByTestId("input");
    const btn = getByTestId("btn");
    fireEvent.change(input, {
      target: {
        value: "15 sss in fff",
      },
    });
    fireEvent.click(btn);
    screen.getByText("Unsupported code [SSS]");
  });
  it("if input is too short", () => {
    const store = createStore(currencyReducer, applyMiddleware(thunk));
    const { getByTestId } = render(
      <Provider store={store}>
        <App />
      </Provider>
    );
    const input = getByTestId("input");
    const btn = getByTestId("btn");
    fireEvent.change(input, {
      target: {
        value: "15 sss",
      },
    });
    fireEvent.click(btn);
    screen.getByText("Short query");
  });
});
