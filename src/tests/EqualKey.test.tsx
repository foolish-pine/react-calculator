import React from "react";
import { render, screen } from "@testing-library/react";

import EqualKey from "../components/EqualKey";

describe("EqualKeyコンポーネント", () => {
  test("「=」ボタンが表示される", () => {
    const input = "123";
    const setInput = jest.fn();
    render(<EqualKey input={input} setInput={setInput} />);
    expect(screen.getByRole("button", { name: "=" })).toBeInTheDocument();
  });
});
