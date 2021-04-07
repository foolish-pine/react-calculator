import React from "react";
import { render, cleanup } from "@testing-library/react";

import ClearKey from "../components/ClearKey";

afterEach(cleanup);

describe("ClearKeyコンポーネント", () => {
  test("「AC」が表示される", () => {
    const input = "123";
    const setInput = jest.fn();
    const { container } = render(
      <ClearKey character={"AC"} input={input} setInput={setInput} />
    );
    expect(container).toHaveTextContent("AC");
  });
});
