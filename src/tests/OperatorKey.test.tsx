import React from "react";
import { render, cleanup } from "@testing-library/react";

import OperatorKey from "../components/OperatorKey";

afterEach(cleanup);

describe("OperatorKeyコンポーネント", () => {
  test("「+」が表示される", () => {
    const input = "123";
    const setInput = jest.fn();
    const { container } = render(
      <OperatorKey character={"+"} input={input} setInput={setInput} />
    );
    expect(container).toHaveTextContent("+");
  });
  test("「-」が表示される", () => {
    const input = "123";
    const setInput = jest.fn();
    const { container } = render(
      <OperatorKey character={"-"} input={input} setInput={setInput} />
    );
    expect(container).toHaveTextContent("-");
  });
  test("「×」が表示される", () => {
    const input = "123";
    const setInput = jest.fn();
    const { container } = render(
      <OperatorKey character={"×"} input={input} setInput={setInput} />
    );
    expect(container).toHaveTextContent("×");
  });
  test("「÷」が表示される", () => {
    const input = "123";
    const setInput = jest.fn();
    const { container } = render(
      <OperatorKey character={"÷"} input={input} setInput={setInput} />
    );
    expect(container).toHaveTextContent("÷");
  });
});
