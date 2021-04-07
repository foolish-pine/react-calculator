import React from "react";
import { render, cleanup } from "@testing-library/react";

import ZeroKey from "../components/ZeroKey";

afterEach(cleanup);

describe("ZeroKeyコンポーネント", () => {
  test("「0」が表示される", () => {
    const input = "123";
    const setInput = jest.fn();
    const { container } = render(<ZeroKey input={input} setInput={setInput} />);
    expect(container).toHaveTextContent("0");
  });
});
