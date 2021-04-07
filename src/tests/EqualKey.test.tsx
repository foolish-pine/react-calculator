import React from "react";
import { render, cleanup } from "@testing-library/react";

import EqualKey from "../components/EqualKey";

afterEach(cleanup);

describe("EqualKeyコンポーネント", () => {
  test("「=」が表示される", () => {
    const input = "123";
    const setInput = jest.fn();
    const { container } = render(
      <EqualKey input={input} setInput={setInput} />
    );
    expect(container).toHaveTextContent("=");
  });
});
