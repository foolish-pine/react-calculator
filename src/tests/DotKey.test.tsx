import React from "react";
import { render, screen } from "@testing-library/react";

import DotKey from "../components/DotKey";

describe("DotKeyコンポーネント", () => {
  test("「.」ボタンが表示される", () => {
    const input = "123";
    const setInput = jest.fn();
    render(<DotKey input={input} setInput={setInput} />);
    expect(screen.getByRole("button", { name: "." })).toBeInTheDocument();
  });
});
