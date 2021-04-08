import React from "react";
import { render, screen } from "@testing-library/react";

import Key from "../components/Key";

describe("Keyコンポーネント", () => {
  test("「1」ボタンが表示されるが表示される", () => {
    const input = "123";
    const setInput = jest.fn();
    render(<Key character={"1"} input={input} setInput={setInput} />);
    expect(screen.getByRole("button", { name: "1" })).toBeInTheDocument();
  });
  test("「2」ボタンが表示される", () => {
    const input = "123";
    const setInput = jest.fn();
    render(<Key character={"2"} input={input} setInput={setInput} />);
    expect(screen.getByRole("button", { name: "2" })).toBeInTheDocument();
  });
  test("「3」ボタンが表示される", () => {
    const input = "123";
    const setInput = jest.fn();
    render(<Key character={"3"} input={input} setInput={setInput} />);
    expect(screen.getByRole("button", { name: "3" })).toBeInTheDocument();
  });
  test("「4」ボタンが表示される", () => {
    const input = "123";
    const setInput = jest.fn();
    render(<Key character={"4"} input={input} setInput={setInput} />);
    expect(screen.getByRole("button", { name: "4" })).toBeInTheDocument();
  });
  test("「5」ボタンが表示される", () => {
    const input = "123";
    const setInput = jest.fn();
    render(<Key character={"5"} input={input} setInput={setInput} />);
    expect(screen.getByRole("button", { name: "5" })).toBeInTheDocument();
  });
  test("「6」ボタンが表示される", () => {
    const input = "123";
    const setInput = jest.fn();
    render(<Key character={"6"} input={input} setInput={setInput} />);
    expect(screen.getByRole("button", { name: "6" })).toBeInTheDocument();
  });
  test("「7」ボタンが表示される", () => {
    const input = "123";
    const setInput = jest.fn();
    render(<Key character={"7"} input={input} setInput={setInput} />);
    expect(screen.getByRole("button", { name: "7" })).toBeInTheDocument();
  });
  test("「8」ボタンが表示される", () => {
    const input = "123";
    const setInput = jest.fn();
    render(<Key character={"8"} input={input} setInput={setInput} />);
    expect(screen.getByRole("button", { name: "8" })).toBeInTheDocument();
  });
  test("「9」ボタンが表示される", () => {
    const input = "123";
    const setInput = jest.fn();
    render(<Key character={"9"} input={input} setInput={setInput} />);
    expect(screen.getByRole("button", { name: "9" })).toBeInTheDocument();
  });
});
