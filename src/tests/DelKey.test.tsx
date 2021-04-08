import React from "react";
import { render, screen } from "@testing-library/react";

import DelKey from "../components/DelKey";

describe("DelKeyコンポーネント", () => {
  test("「Del」ボタンが表示される", () => {
    const input = "123";
    const setInput = jest.fn();
    render(<DelKey character={"Del"} input={input} setInput={setInput} />);
    expect(screen.getByRole("button", { name: "Del" })).toBeInTheDocument();
  });
});
