import React from "react";
import { render, screen } from "@testing-library/react";

import OperatorKey from "../components/OperatorKey";

describe("OperatorKeyコンポーネント", () => {
  test("「+」ボタンが表示される", () => {
    const input = "123";
    const setInput = jest.fn();
    render(<OperatorKey character={"+"} input={input} setInput={setInput} />);
    expect(screen.getByRole("button", { name: "+" })).toBeInTheDocument();
  });
  test("「-」ボタンが表示される", () => {
    const input = "123";
    const setInput = jest.fn();
    render(<OperatorKey character={"-"} input={input} setInput={setInput} />);
    expect(screen.getByRole("button", { name: "-" })).toBeInTheDocument();
  });
  test("「×」ボタンが表示される", () => {
    const input = "123";
    const setInput = jest.fn();
    render(<OperatorKey character={"×"} input={input} setInput={setInput} />);
    expect(screen.getByRole("button", { name: "×" })).toBeInTheDocument();
  });
  test("「÷」ボタンが表示される", () => {
    const input = "123";
    const setInput = jest.fn();
    render(<OperatorKey character={"÷"} input={input} setInput={setInput} />);
    expect(screen.getByRole("button", { name: "÷" })).toBeInTheDocument();
  });
});
