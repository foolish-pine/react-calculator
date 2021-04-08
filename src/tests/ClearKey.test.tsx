import React from "react";
import { render, screen } from "@testing-library/react";

import ClearKey from "../components/ClearKey";

describe("ClearKeyコンポーネント", () => {
  test("「AC」ボタンが表示される", () => {
    const input = "123";
    const setInput = jest.fn();
    render(<ClearKey character={"AC"} input={input} setInput={setInput} />);
    expect(screen.getByRole("button", { name: "AC" })).toBeInTheDocument();
  });
});
