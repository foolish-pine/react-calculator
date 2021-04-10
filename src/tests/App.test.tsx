import React from "react";
import { render, screen } from "@testing-library/react";

import App from "../components/App";
import userEvent from "@testing-library/user-event";

describe("Appコンポーネント", () => {
  describe("初期状態のとき", () => {
    test("数式表示欄には何も表示されない", () => {
      render(<App />);
      expect(screen.getByDisplayValue("")).toBeInTheDocument();
    });
    test("「0」ボタンをクリックすると、0が表示される", () => {
      render(<App />);
      userEvent.click(screen.getByRole("button", { name: "0" }));
      expect(screen.getByDisplayValue("0")).toBeInTheDocument();
    });
    test("「1」ボタンをクリックすると、1が表示される", () => {
      render(<App />);
      userEvent.click(screen.getByRole("button", { name: "1" }));
      expect(screen.getByDisplayValue("1")).toBeInTheDocument();
    });
    test("「2」ボタンをクリックすると、2が表示される", () => {
      render(<App />);
      userEvent.click(screen.getByRole("button", { name: "2" }));
      expect(screen.getByDisplayValue("2")).toBeInTheDocument();
    });
    test("「3」ボタンをクリックすると、3が表示される", () => {
      render(<App />);
      userEvent.click(screen.getByRole("button", { name: "3" }));
      expect(screen.getByDisplayValue("3")).toBeInTheDocument();
    });
    test("「4」ボタンをクリックすると、4が表示される", () => {
      render(<App />);
      userEvent.click(screen.getByRole("button", { name: "4" }));
      expect(screen.getByDisplayValue("4")).toBeInTheDocument();
    });
    test("「5」ボタンをクリックすると、5が表示される", () => {
      render(<App />);
      userEvent.click(screen.getByRole("button", { name: "5" }));
      expect(screen.getByDisplayValue("5")).toBeInTheDocument();
    });
    test("「6」ボタンをクリックすると、6が表示される", () => {
      render(<App />);
      userEvent.click(screen.getByRole("button", { name: "6" }));
      expect(screen.getByDisplayValue("6")).toBeInTheDocument();
    });
    test("「7」ボタンをクリックすると、7が表示される", () => {
      render(<App />);
      userEvent.click(screen.getByRole("button", { name: "7" }));
      expect(screen.getByDisplayValue("7")).toBeInTheDocument();
    });
    test("「8」ボタンをクリックすると、8が表示される", () => {
      render(<App />);
      userEvent.click(screen.getByRole("button", { name: "8" }));
      expect(screen.getByDisplayValue("8")).toBeInTheDocument();
    });
    test("「9」ボタンをクリックすると、9が表示される", () => {
      render(<App />);
      userEvent.click(screen.getByRole("button", { name: "9" }));
      expect(screen.getByDisplayValue("9")).toBeInTheDocument();
    });
    test("「.」ボタンをクリックしても表示は変化しない", () => {
      render(<App />);
      userEvent.click(screen.getByRole("button", { name: "." }));
      expect(screen.getByDisplayValue("")).toBeInTheDocument();
    });
    test("「+」ボタンをクリックしても表示は変化しない", () => {
      render(<App />);
      userEvent.click(screen.getByRole("button", { name: "+" }));
      expect(screen.getByDisplayValue("")).toBeInTheDocument();
    });
    test("「-」ボタンをクリックしても表示は変化しない", () => {
      render(<App />);
      userEvent.click(screen.getByRole("button", { name: "-" }));
      expect(screen.getByDisplayValue("")).toBeInTheDocument();
    });
    test("「×」ボタンをクリックしても表示は変化しない", () => {
      render(<App />);
      userEvent.click(screen.getByRole("button", { name: "×" }));
      expect(screen.getByDisplayValue("")).toBeInTheDocument();
    });
    test("「÷」ボタンをクリックしても表示は変化しない", () => {
      render(<App />);
      userEvent.click(screen.getByRole("button", { name: "÷" }));
      expect(screen.getByDisplayValue("")).toBeInTheDocument();
    });
    test("「AC」ボタンをクリックしても表示は変化しない", () => {
      render(<App />);
      userEvent.click(screen.getByRole("button", { name: "AC" }));
      expect(screen.getByDisplayValue("")).toBeInTheDocument();
    });
    test("「Del」ボタンをクリックしても表示は変化しない", () => {
      render(<App />);
      userEvent.click(screen.getByRole("button", { name: "Del" }));
      expect(screen.getByDisplayValue("")).toBeInTheDocument();
    });
    test("「=」ボタンをクリックしても表示は変化しない", () => {
      render(<App />);
      userEvent.click(screen.getByRole("button", { name: "=" }));
      expect(screen.getByDisplayValue("")).toBeInTheDocument();
    });
  });
  describe("数式の最後の数字が0のとき", () => {
    test("「0」ボタンをクリックしても表示は変化しない", () => {
      render(<App />);
      userEvent.click(screen.getByRole("button", { name: "0" }));
      expect(screen.getByDisplayValue("0")).toBeInTheDocument();
      userEvent.click(screen.getByRole("button", { name: "0" }));
      expect(screen.getByDisplayValue("0")).toBeInTheDocument();
    });
    test("「1」ボタンをクリックしても表示は変化しない", () => {
      render(<App />);
      userEvent.click(screen.getByRole("button", { name: "0" }));
      expect(screen.getByDisplayValue("0")).toBeInTheDocument();
      userEvent.click(screen.getByRole("button", { name: "1" }));
      expect(screen.getByDisplayValue("0")).toBeInTheDocument();
    });
    test("「2」ボタンをクリックしても表示は変化しない", () => {
      render(<App />);
      userEvent.click(screen.getByRole("button", { name: "0" }));
      expect(screen.getByDisplayValue("0")).toBeInTheDocument();
      userEvent.click(screen.getByRole("button", { name: "2" }));
      expect(screen.getByDisplayValue("0")).toBeInTheDocument();
    });
    test("「3」ボタンをクリックしても表示は変化しない", () => {
      render(<App />);
      userEvent.click(screen.getByRole("button", { name: "0" }));
      expect(screen.getByDisplayValue("0")).toBeInTheDocument();
      userEvent.click(screen.getByRole("button", { name: "3" }));
      expect(screen.getByDisplayValue("0")).toBeInTheDocument();
    });
    test("「4」ボタンをクリックしても表示は変化しない", () => {
      render(<App />);
      userEvent.click(screen.getByRole("button", { name: "0" }));
      expect(screen.getByDisplayValue("0")).toBeInTheDocument();
      userEvent.click(screen.getByRole("button", { name: "4" }));
      expect(screen.getByDisplayValue("0")).toBeInTheDocument();
    });
    test("「5」ボタンをクリックしても表示は変化しない", () => {
      render(<App />);
      userEvent.click(screen.getByRole("button", { name: "0" }));
      expect(screen.getByDisplayValue("0")).toBeInTheDocument();
      userEvent.click(screen.getByRole("button", { name: "5" }));
      expect(screen.getByDisplayValue("0")).toBeInTheDocument();
    });
    test("「6」ボタンをクリックしても表示は変化しない", () => {
      render(<App />);
      userEvent.click(screen.getByRole("button", { name: "0" }));
      expect(screen.getByDisplayValue("0")).toBeInTheDocument();
      userEvent.click(screen.getByRole("button", { name: "6" }));
      expect(screen.getByDisplayValue("0")).toBeInTheDocument();
    });
    test("「7」ボタンをクリックしても表示は変化しない", () => {
      render(<App />);
      userEvent.click(screen.getByRole("button", { name: "0" }));
      expect(screen.getByDisplayValue("0")).toBeInTheDocument();
      userEvent.click(screen.getByRole("button", { name: "7" }));
      expect(screen.getByDisplayValue("0")).toBeInTheDocument();
    });
    test("「8」ボタンをクリックしても表示は変化しない", () => {
      render(<App />);
      userEvent.click(screen.getByRole("button", { name: "0" }));
      expect(screen.getByDisplayValue("0")).toBeInTheDocument();
      userEvent.click(screen.getByRole("button", { name: "8" }));
      expect(screen.getByDisplayValue("0")).toBeInTheDocument();
    });
    test("「9」ボタンをクリックしても表示は変化しない", () => {
      render(<App />);
      userEvent.click(screen.getByRole("button", { name: "0" }));
      expect(screen.getByDisplayValue("0")).toBeInTheDocument();
      userEvent.click(screen.getByRole("button", { name: "9" }));
      expect(screen.getByDisplayValue("0")).toBeInTheDocument();
    });
    test("「.」ボタンをクリックすると、末尾に.が追加される", () => {
      render(<App />);
      userEvent.click(screen.getByRole("button", { name: "0" }));
      expect(screen.getByDisplayValue("0")).toBeInTheDocument();
      userEvent.click(screen.getByRole("button", { name: "." }));
      expect(screen.getByDisplayValue("0.")).toBeInTheDocument();
    });
    test("「+」ボタンをクリックすると、末尾に+が追加される", () => {
      render(<App />);
      userEvent.click(screen.getByRole("button", { name: "0" }));
      expect(screen.getByDisplayValue("0")).toBeInTheDocument();
      userEvent.click(screen.getByRole("button", { name: "+" }));
      expect(screen.getByDisplayValue("0+")).toBeInTheDocument();
    });
    test("「-」ボタンをクリックすると、末尾に-が追加される", () => {
      render(<App />);
      userEvent.click(screen.getByRole("button", { name: "0" }));
      expect(screen.getByDisplayValue("0")).toBeInTheDocument();
      userEvent.click(screen.getByRole("button", { name: "-" }));
      expect(screen.getByDisplayValue("0-")).toBeInTheDocument();
    });
    test("「×」ボタンをクリックすると、末尾に×が追加される", () => {
      render(<App />);
      userEvent.click(screen.getByRole("button", { name: "0" }));
      expect(screen.getByDisplayValue("0")).toBeInTheDocument();
      userEvent.click(screen.getByRole("button", { name: "×" }));
      expect(screen.getByDisplayValue("0×")).toBeInTheDocument();
    });
    test("「÷」ボタンをクリックすると、末尾に÷が追加される", () => {
      render(<App />);
      userEvent.click(screen.getByRole("button", { name: "0" }));
      expect(screen.getByDisplayValue("0")).toBeInTheDocument();
      userEvent.click(screen.getByRole("button", { name: "÷" }));
      expect(screen.getByDisplayValue("0÷")).toBeInTheDocument();
    });
    test("「AC」ボタンをクリックすると、数式がクリアされる", () => {
      render(<App />);
      userEvent.click(screen.getByRole("button", { name: "0" }));
      expect(screen.getByDisplayValue("0")).toBeInTheDocument();
      userEvent.click(screen.getByRole("button", { name: "AC" }));
      expect(screen.getByDisplayValue("")).toBeInTheDocument();
    });
    test("「Del」ボタンをクリックすると、数式の末尾の文字が削除される", () => {
      render(<App />);
      userEvent.click(screen.getByRole("button", { name: "0" }));
      expect(screen.getByDisplayValue("0")).toBeInTheDocument();
      userEvent.click(screen.getByRole("button", { name: "Del" }));
      expect(screen.getByDisplayValue("")).toBeInTheDocument();
    });
    test("「=」ボタンをクリックしても、表示は変化しない", () => {
      render(<App />);
      userEvent.click(screen.getByRole("button", { name: "0" }));
      expect(screen.getByDisplayValue("0")).toBeInTheDocument();
      userEvent.click(screen.getByRole("button", { name: "=" }));
      expect(screen.getByDisplayValue("0")).toBeInTheDocument();
    });
  });
  describe("数式の最後の数字の末尾が0以外の数字のとき", () => {
    test("数字をクリックすると、数式の末尾にその数字が追加される", () => {
      render(<App />);
      userEvent.click(screen.getByRole("button", { name: "1" }));
      expect(screen.getByDisplayValue("1")).toBeInTheDocument();
      userEvent.click(screen.getByRole("button", { name: "0" }));
      expect(screen.getByDisplayValue("10")).toBeInTheDocument();
      userEvent.click(screen.getByRole("button", { name: "0" }));
      expect(screen.getByDisplayValue("100")).toBeInTheDocument();
      userEvent.click(screen.getByRole("button", { name: "2" }));
      expect(screen.getByDisplayValue("1002")).toBeInTheDocument();
      userEvent.click(screen.getByRole("button", { name: "4" }));
      expect(screen.getByDisplayValue("10024")).toBeInTheDocument();
    });
    test("「.」ボタンをクリックすると、末尾に.が追加される", () => {
      render(<App />);
      userEvent.click(screen.getByRole("button", { name: "2" }));
      expect(screen.getByDisplayValue("2")).toBeInTheDocument();
      userEvent.click(screen.getByRole("button", { name: "." }));
      expect(screen.getByDisplayValue("2.")).toBeInTheDocument();
    });
    test("「+」ボタンをクリックすると、末尾に+が追加される", () => {
      render(<App />);
      userEvent.click(screen.getByRole("button", { name: "2" }));
      expect(screen.getByDisplayValue("2")).toBeInTheDocument();
      userEvent.click(screen.getByRole("button", { name: "+" }));
      expect(screen.getByDisplayValue("2+")).toBeInTheDocument();
    });
    test("「-」ボタンをクリックすると、末尾に+が追加される", () => {
      render(<App />);
      userEvent.click(screen.getByRole("button", { name: "2" }));
      expect(screen.getByDisplayValue("2")).toBeInTheDocument();
      userEvent.click(screen.getByRole("button", { name: "-" }));
      expect(screen.getByDisplayValue("2-")).toBeInTheDocument();
    });
    test("「×」ボタンをクリックすると、末尾に×が追加される", () => {
      render(<App />);
      userEvent.click(screen.getByRole("button", { name: "2" }));
      expect(screen.getByDisplayValue("2")).toBeInTheDocument();
      userEvent.click(screen.getByRole("button", { name: "×" }));
      expect(screen.getByDisplayValue("2×")).toBeInTheDocument();
    });
    test("「÷」ボタンをクリックすると、末尾に÷が追加される", () => {
      render(<App />);
      userEvent.click(screen.getByRole("button", { name: "2" }));
      expect(screen.getByDisplayValue("2")).toBeInTheDocument();
      userEvent.click(screen.getByRole("button", { name: "÷" }));
      expect(screen.getByDisplayValue("2÷")).toBeInTheDocument();
    });
    test("「AC」ボタンをクリックすると、数式がクリアされる", () => {
      render(<App />);
      userEvent.click(screen.getByRole("button", { name: "2" }));
      expect(screen.getByDisplayValue("2")).toBeInTheDocument();
      userEvent.click(screen.getByRole("button", { name: "AC" }));
      expect(screen.getByDisplayValue("")).toBeInTheDocument();
    });
    test("「Del」ボタンをクリックすると、数式の末尾の文字が削除される", () => {
      render(<App />);
      userEvent.click(screen.getByRole("button", { name: "2" }));
      expect(screen.getByDisplayValue("2")).toBeInTheDocument();
      userEvent.click(screen.getByRole("button", { name: "Del" }));
      expect(screen.getByDisplayValue("")).toBeInTheDocument();
    });
    test("「=」ボタンをクリックしても、表示は変化しない", () => {
      render(<App />);
      userEvent.click(screen.getByRole("button", { name: "2" }));
      expect(screen.getByDisplayValue("2")).toBeInTheDocument();
      userEvent.click(screen.getByRole("button", { name: "=" }));
      expect(screen.getByDisplayValue("2")).toBeInTheDocument();
    });
  });
  describe("数式の最後の数字の末尾が.のとき", () => {
    test("数字をクリックすると、数式の末尾にその数字が追加される", () => {
      render(<App />);
      userEvent.click(screen.getByRole("button", { name: "3" }));
      expect(screen.getByDisplayValue("3")).toBeInTheDocument();
      userEvent.click(screen.getByRole("button", { name: "." }));
      expect(screen.getByDisplayValue("3.")).toBeInTheDocument();
      userEvent.click(screen.getByRole("button", { name: "0" }));
      expect(screen.getByDisplayValue("3.0")).toBeInTheDocument();
      userEvent.click(screen.getByRole("button", { name: "0" }));
      expect(screen.getByDisplayValue("3.00")).toBeInTheDocument();
      userEvent.click(screen.getByRole("button", { name: "4" }));
      expect(screen.getByDisplayValue("3.004")).toBeInTheDocument();
    });
    test("「.」ボタンをクリックしても、表示は変化しない", () => {
      render(<App />);
      userEvent.click(screen.getByRole("button", { name: "3" }));
      userEvent.click(screen.getByRole("button", { name: "." }));
      expect(screen.getByDisplayValue("3.")).toBeInTheDocument();
      userEvent.click(screen.getByRole("button", { name: "." }));
      expect(screen.getByDisplayValue("3.")).toBeInTheDocument();
    });
    test("「+」ボタンをクリックしても、表示は変化しない", () => {
      render(<App />);
      userEvent.click(screen.getByRole("button", { name: "3" }));
      userEvent.click(screen.getByRole("button", { name: "." }));
      expect(screen.getByDisplayValue("3.")).toBeInTheDocument();
      userEvent.click(screen.getByRole("button", { name: "+" }));
      expect(screen.getByDisplayValue("3.")).toBeInTheDocument();
    });
    test("「-」ボタンをクリックしても、表示は変化しない", () => {
      render(<App />);
      userEvent.click(screen.getByRole("button", { name: "3" }));
      userEvent.click(screen.getByRole("button", { name: "." }));
      expect(screen.getByDisplayValue("3.")).toBeInTheDocument();
      userEvent.click(screen.getByRole("button", { name: "-" }));
      expect(screen.getByDisplayValue("3.")).toBeInTheDocument();
    });
    test("「×」ボタンをクリックしても、表示は変化しない", () => {
      render(<App />);
      userEvent.click(screen.getByRole("button", { name: "3" }));
      userEvent.click(screen.getByRole("button", { name: "." }));
      expect(screen.getByDisplayValue("3.")).toBeInTheDocument();
      userEvent.click(screen.getByRole("button", { name: "×" }));
      expect(screen.getByDisplayValue("3.")).toBeInTheDocument();
    });
    test("「÷」ボタンをクリックしても、表示は変化しない", () => {
      render(<App />);
      userEvent.click(screen.getByRole("button", { name: "3" }));
      userEvent.click(screen.getByRole("button", { name: "." }));
      expect(screen.getByDisplayValue("3.")).toBeInTheDocument();
      userEvent.click(screen.getByRole("button", { name: "÷" }));
      expect(screen.getByDisplayValue("3.")).toBeInTheDocument();
    });
    test("「AC」ボタンをクリックすると、数式がクリアされる", () => {
      render(<App />);
      userEvent.click(screen.getByRole("button", { name: "3" }));
      userEvent.click(screen.getByRole("button", { name: "." }));
      expect(screen.getByDisplayValue("3.")).toBeInTheDocument();
      userEvent.click(screen.getByRole("button", { name: "AC" }));
      expect(screen.getByDisplayValue("")).toBeInTheDocument();
    });
    test("「Del」ボタンをクリックすると、数式の末尾の文字が削除される", () => {
      render(<App />);
      userEvent.click(screen.getByRole("button", { name: "3" }));
      userEvent.click(screen.getByRole("button", { name: "." }));
      expect(screen.getByDisplayValue("3.")).toBeInTheDocument();
      userEvent.click(screen.getByRole("button", { name: "Del" }));
      expect(screen.getByDisplayValue("3")).toBeInTheDocument();
    });
    test("「=」ボタンをクリックしても、表示は変化しない", () => {
      render(<App />);
      userEvent.click(screen.getByRole("button", { name: "3" }));
      userEvent.click(screen.getByRole("button", { name: "." }));
      expect(screen.getByDisplayValue("3.")).toBeInTheDocument();
      userEvent.click(screen.getByRole("button", { name: "=" }));
      expect(screen.getByDisplayValue("3.")).toBeInTheDocument();
    });
  });
  describe("数式の最後の数字が小数点を含んでいるとき", () => {
    test("「.」ボタンをクリックしても、表示は変化しない", () => {
      render(<App />);
      userEvent.click(screen.getByRole("button", { name: "3" }));
      userEvent.click(screen.getByRole("button", { name: "." }));
      userEvent.click(screen.getByRole("button", { name: "0" }));
      expect(screen.getByDisplayValue("3.0")).toBeInTheDocument();
      userEvent.click(screen.getByRole("button", { name: "." }));
      expect(screen.getByDisplayValue("3.0")).toBeInTheDocument();
    });
  });
  describe("数式の末尾が+のとき", () => {
    test("数字をクリックすると、数式の末尾にその数字が追加される", () => {
      render(<App />);
      userEvent.click(screen.getByRole("button", { name: "3" }));
      userEvent.click(screen.getByRole("button", { name: "+" }));
      expect(screen.getByDisplayValue("3+")).toBeInTheDocument();
      userEvent.click(screen.getByRole("button", { name: "0" }));
      expect(screen.getByDisplayValue("3+0")).toBeInTheDocument();
      userEvent.click(screen.getByRole("button", { name: "+" }));
      expect(screen.getByDisplayValue("3+0+")).toBeInTheDocument();
      userEvent.click(screen.getByRole("button", { name: "2" }));
      expect(screen.getByDisplayValue("3+0+2")).toBeInTheDocument();
    });
    test("「.」ボタンをクリックしても、表示は変化しない", () => {
      render(<App />);
      userEvent.click(screen.getByRole("button", { name: "3" }));
      userEvent.click(screen.getByRole("button", { name: "+" }));
      expect(screen.getByDisplayValue("3+")).toBeInTheDocument();
      userEvent.click(screen.getByRole("button", { name: "." }));
      expect(screen.getByDisplayValue("3+")).toBeInTheDocument();
    });
    test("「+」ボタンをクリックしても、表示は変化しない", () => {
      render(<App />);
      userEvent.click(screen.getByRole("button", { name: "3" }));
      userEvent.click(screen.getByRole("button", { name: "+" }));
      expect(screen.getByDisplayValue("3+")).toBeInTheDocument();
      userEvent.click(screen.getByRole("button", { name: "+" }));
      expect(screen.getByDisplayValue("3+")).toBeInTheDocument();
    });
    test("「-」ボタンをクリックしても、表示は変化しない", () => {
      render(<App />);
      userEvent.click(screen.getByRole("button", { name: "3" }));
      userEvent.click(screen.getByRole("button", { name: "+" }));
      expect(screen.getByDisplayValue("3+")).toBeInTheDocument();
      userEvent.click(screen.getByRole("button", { name: "-" }));
      expect(screen.getByDisplayValue("3+")).toBeInTheDocument();
    });
    test("「×」ボタンをクリックしても、表示は変化しない", () => {
      render(<App />);
      userEvent.click(screen.getByRole("button", { name: "3" }));
      userEvent.click(screen.getByRole("button", { name: "+" }));
      expect(screen.getByDisplayValue("3+")).toBeInTheDocument();
      userEvent.click(screen.getByRole("button", { name: "×" }));
      expect(screen.getByDisplayValue("3+")).toBeInTheDocument();
    });
    test("「÷」ボタンをクリックしても、表示は変化しない", () => {
      render(<App />);
      userEvent.click(screen.getByRole("button", { name: "3" }));
      userEvent.click(screen.getByRole("button", { name: "+" }));
      expect(screen.getByDisplayValue("3+")).toBeInTheDocument();
      userEvent.click(screen.getByRole("button", { name: "÷" }));
      expect(screen.getByDisplayValue("3+")).toBeInTheDocument();
    });
    test("「AC」ボタンをクリックすると、数式がクリアされる", () => {
      render(<App />);
      userEvent.click(screen.getByRole("button", { name: "3" }));
      userEvent.click(screen.getByRole("button", { name: "+" }));
      expect(screen.getByDisplayValue("3+")).toBeInTheDocument();
      userEvent.click(screen.getByRole("button", { name: "AC" }));
      expect(screen.getByDisplayValue("")).toBeInTheDocument();
    });
    test("「Del」ボタンをクリックすると、数式の末尾の文字が削除される", () => {
      render(<App />);
      userEvent.click(screen.getByRole("button", { name: "3" }));
      userEvent.click(screen.getByRole("button", { name: "+" }));
      expect(screen.getByDisplayValue("3+")).toBeInTheDocument();
      userEvent.click(screen.getByRole("button", { name: "Del" }));
      expect(screen.getByDisplayValue("3")).toBeInTheDocument();
    });
    test("「=」ボタンをクリックしても、表示は変化しない", () => {
      render(<App />);
      userEvent.click(screen.getByRole("button", { name: "3" }));
      userEvent.click(screen.getByRole("button", { name: "+" }));
      expect(screen.getByDisplayValue("3+")).toBeInTheDocument();
      userEvent.click(screen.getByRole("button", { name: "=" }));
      expect(screen.getByDisplayValue("3+")).toBeInTheDocument();
    });
  });
  describe("数式の末尾が-のとき", () => {
    test("数字をクリックすると、数式の末尾にその数字が追加される", () => {
      render(<App />);
      userEvent.click(screen.getByRole("button", { name: "3" }));
      userEvent.click(screen.getByRole("button", { name: "-" }));
      expect(screen.getByDisplayValue("3-")).toBeInTheDocument();
      userEvent.click(screen.getByRole("button", { name: "0" }));
      expect(screen.getByDisplayValue("3-0")).toBeInTheDocument();
      userEvent.click(screen.getByRole("button", { name: "-" }));
      expect(screen.getByDisplayValue("3-0-")).toBeInTheDocument();
      userEvent.click(screen.getByRole("button", { name: "2" }));
      expect(screen.getByDisplayValue("3-0-2")).toBeInTheDocument();
    });
    test("「.」ボタンをクリックしても、表示は変化しない", () => {
      render(<App />);
      userEvent.click(screen.getByRole("button", { name: "3" }));
      userEvent.click(screen.getByRole("button", { name: "-" }));
      expect(screen.getByDisplayValue("3-")).toBeInTheDocument();
      userEvent.click(screen.getByRole("button", { name: "." }));
      expect(screen.getByDisplayValue("3-")).toBeInTheDocument();
    });
    test("「+」ボタンをクリックしても、表示は変化しない", () => {
      render(<App />);
      userEvent.click(screen.getByRole("button", { name: "3" }));
      userEvent.click(screen.getByRole("button", { name: "-" }));
      expect(screen.getByDisplayValue("3-")).toBeInTheDocument();
      userEvent.click(screen.getByRole("button", { name: "+" }));
      expect(screen.getByDisplayValue("3-")).toBeInTheDocument();
    });
    test("「-」ボタンをクリックしても、表示は変化しない", () => {
      render(<App />);
      userEvent.click(screen.getByRole("button", { name: "3" }));
      userEvent.click(screen.getByRole("button", { name: "-" }));
      expect(screen.getByDisplayValue("3-")).toBeInTheDocument();
      userEvent.click(screen.getByRole("button", { name: "-" }));
      expect(screen.getByDisplayValue("3-")).toBeInTheDocument();
    });
    test("「×」ボタンをクリックしても、表示は変化しない", () => {
      render(<App />);
      userEvent.click(screen.getByRole("button", { name: "3" }));
      userEvent.click(screen.getByRole("button", { name: "-" }));
      expect(screen.getByDisplayValue("3-")).toBeInTheDocument();
      userEvent.click(screen.getByRole("button", { name: "×" }));
      expect(screen.getByDisplayValue("3-")).toBeInTheDocument();
    });
    test("「÷」ボタンをクリックしても、表示は変化しない", () => {
      render(<App />);
      userEvent.click(screen.getByRole("button", { name: "3" }));
      userEvent.click(screen.getByRole("button", { name: "-" }));
      expect(screen.getByDisplayValue("3-")).toBeInTheDocument();
      userEvent.click(screen.getByRole("button", { name: "÷" }));
      expect(screen.getByDisplayValue("3-")).toBeInTheDocument();
    });
    test("「AC」ボタンをクリックすると、数式がクリアされる", () => {
      render(<App />);
      userEvent.click(screen.getByRole("button", { name: "3" }));
      userEvent.click(screen.getByRole("button", { name: "-" }));
      expect(screen.getByDisplayValue("3-")).toBeInTheDocument();
      userEvent.click(screen.getByRole("button", { name: "AC" }));
      expect(screen.getByDisplayValue("")).toBeInTheDocument();
    });
    test("「Del」ボタンをクリックすると、数式の末尾の文字が削除される", () => {
      render(<App />);
      userEvent.click(screen.getByRole("button", { name: "3" }));
      userEvent.click(screen.getByRole("button", { name: "-" }));
      expect(screen.getByDisplayValue("3-")).toBeInTheDocument();
      userEvent.click(screen.getByRole("button", { name: "Del" }));
      expect(screen.getByDisplayValue("3")).toBeInTheDocument();
    });
    test("「=」ボタンをクリックしても、表示は変化しない", () => {
      render(<App />);
      userEvent.click(screen.getByRole("button", { name: "3" }));
      userEvent.click(screen.getByRole("button", { name: "-" }));
      expect(screen.getByDisplayValue("3-")).toBeInTheDocument();
      userEvent.click(screen.getByRole("button", { name: "=" }));
      expect(screen.getByDisplayValue("3-")).toBeInTheDocument();
    });
  });
  describe("数式の末尾が×のとき", () => {
    test("数字をクリックすると、数式の末尾にその数字が追加される", () => {
      render(<App />);
      userEvent.click(screen.getByRole("button", { name: "3" }));
      userEvent.click(screen.getByRole("button", { name: "×" }));
      expect(screen.getByDisplayValue("3×")).toBeInTheDocument();
      userEvent.click(screen.getByRole("button", { name: "0" }));
      expect(screen.getByDisplayValue("3×0")).toBeInTheDocument();
      userEvent.click(screen.getByRole("button", { name: "×" }));
      expect(screen.getByDisplayValue("3×0×")).toBeInTheDocument();
      userEvent.click(screen.getByRole("button", { name: "2" }));
      expect(screen.getByDisplayValue("3×0×2")).toBeInTheDocument();
    });
    test("「.」ボタンをクリックしても、表示は変化しない", () => {
      render(<App />);
      userEvent.click(screen.getByRole("button", { name: "3" }));
      userEvent.click(screen.getByRole("button", { name: "×" }));
      expect(screen.getByDisplayValue("3×")).toBeInTheDocument();
      userEvent.click(screen.getByRole("button", { name: "." }));
      expect(screen.getByDisplayValue("3×")).toBeInTheDocument();
    });
    test("「+」ボタンをクリックしても、表示は変化しない", () => {
      render(<App />);
      userEvent.click(screen.getByRole("button", { name: "3" }));
      userEvent.click(screen.getByRole("button", { name: "×" }));
      expect(screen.getByDisplayValue("3×")).toBeInTheDocument();
      userEvent.click(screen.getByRole("button", { name: "+" }));
      expect(screen.getByDisplayValue("3×")).toBeInTheDocument();
    });
    test("「-」ボタンをクリックすると、末尾に-が追加される", () => {
      render(<App />);
      userEvent.click(screen.getByRole("button", { name: "3" }));
      userEvent.click(screen.getByRole("button", { name: "×" }));
      expect(screen.getByDisplayValue("3×")).toBeInTheDocument();
      userEvent.click(screen.getByRole("button", { name: "-" }));
      expect(screen.getByDisplayValue("3×-")).toBeInTheDocument();
    });
    test("「×」ボタンをクリックしても、表示は変化しない", () => {
      render(<App />);
      userEvent.click(screen.getByRole("button", { name: "3" }));
      userEvent.click(screen.getByRole("button", { name: "×" }));
      expect(screen.getByDisplayValue("3×")).toBeInTheDocument();
      userEvent.click(screen.getByRole("button", { name: "×" }));
      expect(screen.getByDisplayValue("3×")).toBeInTheDocument();
    });
    test("「÷」ボタンをクリックしても、表示は変化しない", () => {
      render(<App />);
      userEvent.click(screen.getByRole("button", { name: "3" }));
      userEvent.click(screen.getByRole("button", { name: "×" }));
      expect(screen.getByDisplayValue("3×")).toBeInTheDocument();
      userEvent.click(screen.getByRole("button", { name: "÷" }));
      expect(screen.getByDisplayValue("3×")).toBeInTheDocument();
    });
    test("「AC」ボタンをクリックすると、数式がクリアされる", () => {
      render(<App />);
      userEvent.click(screen.getByRole("button", { name: "3" }));
      userEvent.click(screen.getByRole("button", { name: "×" }));
      expect(screen.getByDisplayValue("3×")).toBeInTheDocument();
      userEvent.click(screen.getByRole("button", { name: "AC" }));
      expect(screen.getByDisplayValue("")).toBeInTheDocument();
    });
    test("「Del」ボタンをクリックすると、数式の末尾の文字が削除される", () => {
      render(<App />);
      userEvent.click(screen.getByRole("button", { name: "3" }));
      userEvent.click(screen.getByRole("button", { name: "×" }));
      expect(screen.getByDisplayValue("3×")).toBeInTheDocument();
      userEvent.click(screen.getByRole("button", { name: "Del" }));
      expect(screen.getByDisplayValue("3")).toBeInTheDocument();
    });
    test("「=」ボタンをクリックしても、表示は変化しない", () => {
      render(<App />);
      userEvent.click(screen.getByRole("button", { name: "3" }));
      userEvent.click(screen.getByRole("button", { name: "×" }));
      expect(screen.getByDisplayValue("3×")).toBeInTheDocument();
      userEvent.click(screen.getByRole("button", { name: "=" }));
      expect(screen.getByDisplayValue("3×")).toBeInTheDocument();
    });
  });
  describe("数式の末尾が÷のとき", () => {
    test("数字をクリックすると、数式の末尾にその数字が追加される", () => {
      render(<App />);
      userEvent.click(screen.getByRole("button", { name: "3" }));
      userEvent.click(screen.getByRole("button", { name: "÷" }));
      expect(screen.getByDisplayValue("3÷")).toBeInTheDocument();
      userEvent.click(screen.getByRole("button", { name: "0" }));
      expect(screen.getByDisplayValue("3÷0")).toBeInTheDocument();
      userEvent.click(screen.getByRole("button", { name: "÷" }));
      expect(screen.getByDisplayValue("3÷0÷")).toBeInTheDocument();
      userEvent.click(screen.getByRole("button", { name: "2" }));
      expect(screen.getByDisplayValue("3÷0÷2")).toBeInTheDocument();
    });
    test("「.」ボタンをクリックしても、表示は変化しない", () => {
      render(<App />);
      userEvent.click(screen.getByRole("button", { name: "3" }));
      userEvent.click(screen.getByRole("button", { name: "÷" }));
      expect(screen.getByDisplayValue("3÷")).toBeInTheDocument();
      userEvent.click(screen.getByRole("button", { name: "." }));
      expect(screen.getByDisplayValue("3÷")).toBeInTheDocument();
    });
    test("「+」ボタンをクリックしても、表示は変化しない", () => {
      render(<App />);
      userEvent.click(screen.getByRole("button", { name: "3" }));
      userEvent.click(screen.getByRole("button", { name: "÷" }));
      expect(screen.getByDisplayValue("3÷")).toBeInTheDocument();
      userEvent.click(screen.getByRole("button", { name: "+" }));
      expect(screen.getByDisplayValue("3÷")).toBeInTheDocument();
    });
    test("「-」ボタンをクリックすると、末尾に-が追加される", () => {
      render(<App />);
      userEvent.click(screen.getByRole("button", { name: "3" }));
      userEvent.click(screen.getByRole("button", { name: "÷" }));
      expect(screen.getByDisplayValue("3÷")).toBeInTheDocument();
      userEvent.click(screen.getByRole("button", { name: "-" }));
      expect(screen.getByDisplayValue("3÷-")).toBeInTheDocument();
    });
    test("「×」ボタンをクリックしても、表示は変化しない", () => {
      render(<App />);
      userEvent.click(screen.getByRole("button", { name: "3" }));
      userEvent.click(screen.getByRole("button", { name: "÷" }));
      expect(screen.getByDisplayValue("3÷")).toBeInTheDocument();
      userEvent.click(screen.getByRole("button", { name: "÷" }));
      expect(screen.getByDisplayValue("3÷")).toBeInTheDocument();
    });
    test("「÷」ボタンをクリックしても、表示は変化しない", () => {
      render(<App />);
      userEvent.click(screen.getByRole("button", { name: "3" }));
      userEvent.click(screen.getByRole("button", { name: "÷" }));
      expect(screen.getByDisplayValue("3÷")).toBeInTheDocument();
      userEvent.click(screen.getByRole("button", { name: "÷" }));
      expect(screen.getByDisplayValue("3÷")).toBeInTheDocument();
    });
    test("「AC」ボタンをクリックすると、数式がクリアされる", () => {
      render(<App />);
      userEvent.click(screen.getByRole("button", { name: "3" }));
      userEvent.click(screen.getByRole("button", { name: "÷" }));
      expect(screen.getByDisplayValue("3÷")).toBeInTheDocument();
      userEvent.click(screen.getByRole("button", { name: "AC" }));
      expect(screen.getByDisplayValue("")).toBeInTheDocument();
    });
    test("「Del」ボタンをクリックすると、数式の末尾の文字が削除される", () => {
      render(<App />);
      userEvent.click(screen.getByRole("button", { name: "3" }));
      userEvent.click(screen.getByRole("button", { name: "÷" }));
      expect(screen.getByDisplayValue("3÷")).toBeInTheDocument();
      userEvent.click(screen.getByRole("button", { name: "Del" }));
      expect(screen.getByDisplayValue("3")).toBeInTheDocument();
    });
    test("「=」ボタンをクリックしても、表示は変化しない", () => {
      render(<App />);
      userEvent.click(screen.getByRole("button", { name: "3" }));
      userEvent.click(screen.getByRole("button", { name: "÷" }));
      expect(screen.getByDisplayValue("3÷")).toBeInTheDocument();
      userEvent.click(screen.getByRole("button", { name: "=" }));
      expect(screen.getByDisplayValue("3÷")).toBeInTheDocument();
    });
  });
  describe("数式が演算子を含みかつ数式の末尾が数字のとき、「=」ボタンをクリックすると計算結果を表示する", () => {
    test("整数の加算を行う", () => {
      render(<App />);
      userEvent.click(screen.getByRole("button", { name: "2" }));
      userEvent.click(screen.getByRole("button", { name: "+" }));
      userEvent.click(screen.getByRole("button", { name: "3" }));
      expect(screen.getByDisplayValue("2+3")).toBeInTheDocument();
      userEvent.click(screen.getByRole("button", { name: "=" }));
      expect(screen.getByDisplayValue("5")).toBeInTheDocument();
    });
    test("整数の減算を行う", () => {
      render(<App />);
      userEvent.click(screen.getByRole("button", { name: "7" }));
      userEvent.click(screen.getByRole("button", { name: "-" }));
      userEvent.click(screen.getByRole("button", { name: "6" }));
      expect(screen.getByDisplayValue("7-6")).toBeInTheDocument();
      userEvent.click(screen.getByRole("button", { name: "=" }));
      expect(screen.getByDisplayValue("1")).toBeInTheDocument();
    });
    test("整数の乗算を行う", () => {
      render(<App />);
      userEvent.click(screen.getByRole("button", { name: "5" }));
      userEvent.click(screen.getByRole("button", { name: "×" }));
      userEvent.click(screen.getByRole("button", { name: "9" }));
      expect(screen.getByDisplayValue("5×9")).toBeInTheDocument();
      userEvent.click(screen.getByRole("button", { name: "=" }));
      expect(screen.getByDisplayValue("45")).toBeInTheDocument();
    });
    test("整数の除算を行う", () => {
      render(<App />);
      userEvent.click(screen.getByRole("button", { name: "6" }));
      userEvent.click(screen.getByRole("button", { name: "4" }));
      userEvent.click(screen.getByRole("button", { name: "÷" }));
      userEvent.click(screen.getByRole("button", { name: "8" }));
      expect(screen.getByDisplayValue("64÷8")).toBeInTheDocument();
      userEvent.click(screen.getByRole("button", { name: "=" }));
      expect(screen.getByDisplayValue("8")).toBeInTheDocument();
    });
    test("小数を含む加算を行う", () => {
      render(<App />);
      userEvent.click(screen.getByRole("button", { name: "0" }));
      userEvent.click(screen.getByRole("button", { name: "." }));
      userEvent.click(screen.getByRole("button", { name: "3" }));
      userEvent.click(screen.getByRole("button", { name: "-" }));
      userEvent.click(screen.getByRole("button", { name: "0" }));
      userEvent.click(screen.getByRole("button", { name: "." }));
      userEvent.click(screen.getByRole("button", { name: "1" }));
      userEvent.click(screen.getByRole("button", { name: "=" }));
      expect(screen.getByDisplayValue("0.2")).toBeInTheDocument();
    });
    test("四則演算を含む整数の演算を行う", () => {
      render(<App />);
      userEvent.click(screen.getByRole("button", { name: "5" }));
      userEvent.click(screen.getByRole("button", { name: "4" }));
      userEvent.click(screen.getByRole("button", { name: "×" }));
      userEvent.click(screen.getByRole("button", { name: "9" }));
      userEvent.click(screen.getByRole("button", { name: "2" }));
      userEvent.click(screen.getByRole("button", { name: "+" }));
      userEvent.click(screen.getByRole("button", { name: "4" }));
      userEvent.click(screen.getByRole("button", { name: "÷" }));
      userEvent.click(screen.getByRole("button", { name: "-" }));
      userEvent.click(screen.getByRole("button", { name: "8" }));
      userEvent.click(screen.getByRole("button", { name: "0" }));
      userEvent.click(screen.getByRole("button", { name: "=" }));
      expect(screen.getByDisplayValue("4967.95")).toBeInTheDocument();
    });
    test("四則演算と小数を含む演算を行う", () => {
      render(<App />);
      userEvent.click(screen.getByRole("button", { name: "5" }));
      userEvent.click(screen.getByRole("button", { name: "." }));
      userEvent.click(screen.getByRole("button", { name: "3" }));
      userEvent.click(screen.getByRole("button", { name: "+" }));
      userEvent.click(screen.getByRole("button", { name: "7" }));
      userEvent.click(screen.getByRole("button", { name: "÷" }));
      userEvent.click(screen.getByRole("button", { name: "2" }));
      userEvent.click(screen.getByRole("button", { name: "." }));
      userEvent.click(screen.getByRole("button", { name: "1" }));
      userEvent.click(screen.getByRole("button", { name: "×" }));
      userEvent.click(screen.getByRole("button", { name: "3" }));
      userEvent.click(screen.getByRole("button", { name: "." }));
      userEvent.click(screen.getByRole("button", { name: "9" }));
      userEvent.click(screen.getByRole("button", { name: "÷" }));
      userEvent.click(screen.getByRole("button", { name: "-" }));
      userEvent.click(screen.getByRole("button", { name: "4" }));
      userEvent.click(screen.getByRole("button", { name: "=" }));
      expect(screen.getByDisplayValue("2.05")).toBeInTheDocument();
    });
  });
});
