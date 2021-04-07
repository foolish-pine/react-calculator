import React from "react";
import { render, screen } from "@testing-library/react";

import App from "../components/App";
import userEvent from "@testing-library/user-event";

describe("Appコンポーネント", () => {
  test("0のキーをクリックすると、0が表示される", () => {
    render(<App />);
    userEvent.click(screen.getByText("0"));
    expect(screen.getByDisplayValue("0")).toBeInTheDocument();
  });
  test("1のキーをクリックすると、1が表示される", () => {
    render(<App />);
    userEvent.click(screen.getByText("1"));
    expect(screen.getByDisplayValue("1")).toBeInTheDocument();
  });
  test("2のキーをクリックすると、2が表示される", () => {
    render(<App />);
    userEvent.click(screen.getByText("2"));
    expect(screen.getByDisplayValue("2")).toBeInTheDocument();
  });
  test("3のキーをクリックすると、3が表示される", () => {
    render(<App />);
    userEvent.click(screen.getByText("3"));
    expect(screen.getByDisplayValue("3")).toBeInTheDocument();
  });
  test("4のキーをクリックすると、4が表示される", () => {
    render(<App />);
    userEvent.click(screen.getByText("4"));
    expect(screen.getByDisplayValue("4")).toBeInTheDocument();
  });
  test("5のキーをクリックすると、5が表示される", () => {
    render(<App />);
    userEvent.click(screen.getByText("5"));
    expect(screen.getByDisplayValue("5")).toBeInTheDocument();
  });
  test("6のキーをクリックすると、6が表示される", () => {
    render(<App />);
    userEvent.click(screen.getByText("6"));
    expect(screen.getByDisplayValue("6")).toBeInTheDocument();
  });
  test("7のキーをクリックすると、7が表示される", () => {
    render(<App />);
    userEvent.click(screen.getByText("7"));
    expect(screen.getByDisplayValue("7")).toBeInTheDocument();
  });
  test("8のキーをクリックすると、8が表示される", () => {
    render(<App />);
    userEvent.click(screen.getByText("8"));
    expect(screen.getByDisplayValue("8")).toBeInTheDocument();
  });
  test("9のキーをクリックすると、9が表示される", () => {
    render(<App />);
    userEvent.click(screen.getByText("9"));
    expect(screen.getByDisplayValue("9")).toBeInTheDocument();
  });
  test("表示されている数式の最後の数字が0の場合、続けて数字をクリックしても表示は変化しない", () => {
    render(<App />);
    userEvent.click(screen.getByText("5"));
    userEvent.click(screen.getByText("+"));
    userEvent.click(screen.getByText("0"));
    userEvent.click(screen.getByText("1"));
    expect(screen.getByDisplayValue("5+0")).toBeInTheDocument();
  });
  test("最初に0以外の数字をクリックしたあと数字をクリックすると、その数字が表示の末尾に追加される", () => {
    render(<App />);
    userEvent.click(screen.getByText("1"));
    userEvent.click(screen.getByText("0"));
    userEvent.click(screen.getByText("1"));
    userEvent.click(screen.getByText("4"));
    expect(screen.getByDisplayValue("1014")).toBeInTheDocument();
  });
  test.todo("何も表示されていない状態で.をクリックしても表示は変化しない");
  test.todo(
    "数字がクリックされたあとに.をクリックすると、表示の末尾に.が追加される"
  );
  test.todo(
    "表示されている数式の最後の数字に.が含まれている場合、.をクリックしても表示は変化しない"
  );
  test.todo("少数の加減の結果を表示する");
});
