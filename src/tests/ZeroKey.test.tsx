import React from "react";
import { render, screen } from "@testing-library/react";

import ZeroKey from "../components/ZeroKey";

describe("ZeroKeyコンポーネント", () => {
  test("「0」ボタンが表示される", () => {
    const input = "123";
    const setInput = jest.fn();
    render(<ZeroKey input={input} setInput={setInput} />);
    expect(screen.getByRole("button", { name: "0" })).toBeInTheDocument();
  });
});
