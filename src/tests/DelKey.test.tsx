import React from "react";
import { render, cleanup } from "@testing-library/react";

import DelKey from "../components/DelKey";

afterEach(cleanup);

describe("DelKeyコンポーネント", () => {
  test("「Del」が表示される", () => {
    const input = "123";
    const setInput = jest.fn();
    const { container } = render(
      <DelKey character={"Del"} input={input} setInput={setInput} />
    );
    expect(container).toHaveTextContent("Del");
  });
});
