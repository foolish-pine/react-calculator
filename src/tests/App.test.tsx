import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";

import App from "../components/App";
import userEvent from "@testing-library/user-event";

describe("Appコンポーネント", () => {
  test("1のキーをクリックすると、1が表示される", () => {
    render(<App />);
    userEvent.click(screen.getByText("1"));
    expect(screen.getByDisplayValue("1")).toBeInTheDocument();
  });
  test("2のキーをクリックすると、2が表示される", () => {
    render(<App />);
    userEvent.click(screen.getByText("2"));
    expect(screen.getByDisplayValue("2")).toBeInTheDocument();
  });
  // test("整数の加減の結果を表示する", () => {
  //   const { getByTestId, getByText } = render(<App />);
  //   fireEvent.click(getByText("2"));
  //   fireEvent.click(getByText("+"));
  //   fireEvent.click(getByText("3"));
  //   fireEvent.click(getByText("="));
  //   expect(getByTestId("result")).toHaveTextContent("5");
  // });
  test.todo("少数の加減の結果を表示する");
});
