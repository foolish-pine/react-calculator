import React from "react";
import { render, cleanup } from "@testing-library/react";

import DotKey from "../components/DotKey";

afterEach(cleanup);

describe("DotKeyコンポーネント", () => {
  test("「Del」が表示される", () => {
    const input = "123";
    const setInput = jest.fn();
    const { container } = render(<DotKey input={input} setInput={setInput} />);
    expect(container).toHaveTextContent(".");
  });
});
