import React from "react";
import { render, cleanup } from "@testing-library/react";

import Key from "../components/Key";

afterEach(cleanup);

describe("Keyコンポーネント", () => {
  test("「1」が表示される", () => {
    const input = "123";
    const setInput = jest.fn();
    const { container } = render(
      <Key character={"1"} input={input} setInput={setInput} />
    );
    expect(container).toHaveTextContent("1");
  });
  test("「2」が表示される", () => {
    const input = "123";
    const setInput = jest.fn();
    const { container } = render(
      <Key character={"2"} input={input} setInput={setInput} />
    );
    expect(container).toHaveTextContent("2");
  });
  test("「3」が表示される", () => {
    const input = "123";
    const setInput = jest.fn();
    const { container } = render(
      <Key character={"3"} input={input} setInput={setInput} />
    );
    expect(container).toHaveTextContent("3");
  });
  test("「4」が表示される", () => {
    const input = "123";
    const setInput = jest.fn();
    const { container } = render(
      <Key character={"4"} input={input} setInput={setInput} />
    );
    expect(container).toHaveTextContent("4");
  });
  test("「5」が表示される", () => {
    const input = "123";
    const setInput = jest.fn();
    const { container } = render(
      <Key character={"5"} input={input} setInput={setInput} />
    );
    expect(container).toHaveTextContent("5");
  });
  test("「6」が表示される", () => {
    const input = "123";
    const setInput = jest.fn();
    const { container } = render(
      <Key character={"6"} input={input} setInput={setInput} />
    );
    expect(container).toHaveTextContent("6");
  });
  test("「7」が表示される", () => {
    const input = "123";
    const setInput = jest.fn();
    const { container } = render(
      <Key character={"7"} input={input} setInput={setInput} />
    );
    expect(container).toHaveTextContent("7");
  });
  test("「8」が表示される", () => {
    const input = "123";
    const setInput = jest.fn();
    const { container } = render(
      <Key character={"8"} input={input} setInput={setInput} />
    );
    expect(container).toHaveTextContent("8");
  });
  test("「9」が表示される", () => {
    const input = "123";
    const setInput = jest.fn();
    const { container } = render(
      <Key character={"9"} input={input} setInput={setInput} />
    );
    expect(container).toHaveTextContent("9");
  });
});
