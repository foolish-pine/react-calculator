import React from "react";
import { render, screen } from "@testing-library/react";

import App from "../components/App";
import userEvent from "@testing-library/user-event";

describe("Appコンポーネント", () => {
  test("初期状態では数式表示欄には何も表示されない", () => {
    render(<App />);
    expect(screen.getByDisplayValue("")).toBeInTheDocument();
  });
  test("「1」ボタンをクリックすると、表示されている数式の末尾に1が追加される", () => {
    render(<App />);
    userEvent.click(screen.getByRole("button", { name: "1" }));
    expect(screen.getByDisplayValue("1")).toBeInTheDocument();
  });
  test("「2」ボタンをクリックすると、表示されている数式の末尾に2が追加される", () => {
    render(<App />);
    userEvent.click(screen.getByRole("button", { name: "2" }));
    expect(screen.getByDisplayValue("2")).toBeInTheDocument();
  });
  test("「3」ボタンをクリックすると、表示されている数式の末尾に3が追加される", () => {
    render(<App />);
    userEvent.click(screen.getByRole("button", { name: "3" }));
    expect(screen.getByDisplayValue("3")).toBeInTheDocument();
  });
  test("「4」ボタンをクリックすると、表示されている数式の末尾に4が追加される", () => {
    render(<App />);
    userEvent.click(screen.getByRole("button", { name: "4" }));
    expect(screen.getByDisplayValue("4")).toBeInTheDocument();
  });
  test("「5」ボタンをクリックすると、表示されている数式の末尾に5が追加される", () => {
    render(<App />);
    userEvent.click(screen.getByRole("button", { name: "5" }));
    expect(screen.getByDisplayValue("5")).toBeInTheDocument();
  });
  test("「6」ボタンをクリックすると、表示されている数式の末尾に6が追加される", () => {
    render(<App />);
    userEvent.click(screen.getByRole("button", { name: "6" }));
    expect(screen.getByDisplayValue("6")).toBeInTheDocument();
  });
  test("「7」ボタンをクリックすると、表示されている数式の末尾に7が追加される", () => {
    render(<App />);
    userEvent.click(screen.getByRole("button", { name: "7" }));
    expect(screen.getByDisplayValue("7")).toBeInTheDocument();
  });
  test("「8」ボタンをクリックすると、表示されている数式の末尾に8が追加される", () => {
    render(<App />);
    userEvent.click(screen.getByRole("button", { name: "8" }));
    expect(screen.getByDisplayValue("8")).toBeInTheDocument();
  });
  test("「9」ボタンをクリックすると、表示されている数式の末尾に9が追加される", () => {
    render(<App />);
    userEvent.click(screen.getByRole("button", { name: "9" }));
    expect(screen.getByDisplayValue("9")).toBeInTheDocument();
  });
  test("「AC」ボタンをクリックすると、数式がクリアされる", () => {
    render(<App />);
    userEvent.click(screen.getByRole("button", { name: "2" }));
    userEvent.click(screen.getByRole("button", { name: "3" }));
    expect(screen.getByDisplayValue("23")).toBeInTheDocument();
    userEvent.click(screen.getByRole("button", { name: "AC" }));
    expect(screen.getByDisplayValue("")).toBeInTheDocument();
  });
  test("「Del」ボタンをクリックすると、数式の末尾の1文字が削除される", () => {
    render(<App />);
    userEvent.click(screen.getByRole("button", { name: "2" }));
    userEvent.click(screen.getByRole("button", { name: "3" }));
    expect(screen.getByDisplayValue("23")).toBeInTheDocument();
    userEvent.click(screen.getByRole("button", { name: "Del" }));
    expect(screen.getByDisplayValue("2")).toBeInTheDocument();
  });
  test("「+」ボタンをクリックすると、数式の末尾に+が追加される", () => {
    render(<App />);
    userEvent.click(screen.getByRole("button", { name: "2" }));
    userEvent.click(screen.getByRole("button", { name: "+" }));
    expect(screen.getByDisplayValue("2+")).toBeInTheDocument();
  });
  test("「-」ボタンをクリックすると、数式の末尾に-が追加される", () => {
    render(<App />);
    userEvent.click(screen.getByRole("button", { name: "2" }));
    userEvent.click(screen.getByRole("button", { name: "-" }));
    expect(screen.getByDisplayValue("2-")).toBeInTheDocument();
  });
  test("「×」ボタンをクリックすると、数式の末尾に×が追加される", () => {
    render(<App />);
    userEvent.click(screen.getByRole("button", { name: "2" }));
    userEvent.click(screen.getByRole("button", { name: "×" }));
    expect(screen.getByDisplayValue("2×")).toBeInTheDocument();
  });
  test("「÷」ボタンをクリックすると、数式の末尾に÷が追加される", () => {
    render(<App />);
    userEvent.click(screen.getByRole("button", { name: "2" }));
    userEvent.click(screen.getByRole("button", { name: "÷" }));
    expect(screen.getByDisplayValue("2÷")).toBeInTheDocument();
  });
  test.todo(
    "数式の末尾が.のとき、演算子ボタンをクリックしても表示は変化しない"
  );
  test("数式が空のとき、演算子ボタンをクリックしても表示は変化しない", () => {
    render(<App />);
    userEvent.click(screen.getByRole("button", { name: "+" }));
    expect(screen.getByDisplayValue("")).toBeInTheDocument();
    userEvent.click(screen.getByRole("button", { name: "-" }));
    expect(screen.getByDisplayValue("")).toBeInTheDocument();
    userEvent.click(screen.getByRole("button", { name: "×" }));
    expect(screen.getByDisplayValue("")).toBeInTheDocument();
    userEvent.click(screen.getByRole("button", { name: "÷" }));
    expect(screen.getByDisplayValue("")).toBeInTheDocument();
  });
  test("数式の末尾が+または-のとき、演算子ボタンをクリックしても表示は変化しない", () => {
    render(<App />);
    userEvent.click(screen.getByRole("button", { name: "2" }));
    userEvent.click(screen.getByRole("button", { name: "+" }));
    userEvent.click(screen.getByRole("button", { name: "+" }));
    expect(screen.getByDisplayValue("2+")).toBeInTheDocument();
    userEvent.click(screen.getByRole("button", { name: "-" }));
    expect(screen.getByDisplayValue("2+")).toBeInTheDocument();
    userEvent.click(screen.getByRole("button", { name: "×" }));
    expect(screen.getByDisplayValue("2+")).toBeInTheDocument();
    userEvent.click(screen.getByRole("button", { name: "÷" }));
    expect(screen.getByDisplayValue("2+")).toBeInTheDocument();
    userEvent.click(screen.getByRole("button", { name: "AC" }));
    userEvent.click(screen.getByRole("button", { name: "2" }));
    userEvent.click(screen.getByRole("button", { name: "-" }));
    userEvent.click(screen.getByRole("button", { name: "+" }));
    expect(screen.getByDisplayValue("2-")).toBeInTheDocument();
    userEvent.click(screen.getByRole("button", { name: "-" }));
    expect(screen.getByDisplayValue("2-")).toBeInTheDocument();
    userEvent.click(screen.getByRole("button", { name: "×" }));
    expect(screen.getByDisplayValue("2-")).toBeInTheDocument();
    userEvent.click(screen.getByRole("button", { name: "÷" }));
    expect(screen.getByDisplayValue("2-")).toBeInTheDocument();
  });
  test("数式の末尾が×または÷のとき「-」ボタンをクリックすると数式の末尾に-が追加されるが、それ以外の演算子ボタンをクリックしても表示は変化しない", () => {
    render(<App />);
    userEvent.click(screen.getByRole("button", { name: "2" }));
    userEvent.click(screen.getByRole("button", { name: "×" }));
    expect(screen.getByDisplayValue("2×")).toBeInTheDocument();
    userEvent.click(screen.getByRole("button", { name: "-" }));
    expect(screen.getByDisplayValue("2×-")).toBeInTheDocument();
    userEvent.click(screen.getByRole("button", { name: "AC" }));
    expect(screen.getByDisplayValue("")).toBeInTheDocument();
    userEvent.click(screen.getByRole("button", { name: "2" }));
    userEvent.click(screen.getByRole("button", { name: "÷" }));
    expect(screen.getByDisplayValue("2÷")).toBeInTheDocument();
    userEvent.click(screen.getByRole("button", { name: "-" }));
    expect(screen.getByDisplayValue("2÷-")).toBeInTheDocument();
    userEvent.click(screen.getByRole("button", { name: "AC" }));
    userEvent.click(screen.getByRole("button", { name: "2" }));
    userEvent.click(screen.getByRole("button", { name: "×" }));
    expect(screen.getByDisplayValue("2×")).toBeInTheDocument();
    userEvent.click(screen.getByRole("button", { name: "+" }));
    expect(screen.getByDisplayValue("2×")).toBeInTheDocument();
    userEvent.click(screen.getByRole("button", { name: "×" }));
    expect(screen.getByDisplayValue("2×")).toBeInTheDocument();
    userEvent.click(screen.getByRole("button", { name: "÷" }));
    expect(screen.getByDisplayValue("2×")).toBeInTheDocument();
    userEvent.click(screen.getByRole("button", { name: "AC" }));
    userEvent.click(screen.getByRole("button", { name: "2" }));
    userEvent.click(screen.getByRole("button", { name: "÷" }));
    expect(screen.getByDisplayValue("2÷")).toBeInTheDocument();
    userEvent.click(screen.getByRole("button", { name: "+" }));
    expect(screen.getByDisplayValue("2÷")).toBeInTheDocument();
    userEvent.click(screen.getByRole("button", { name: "×" }));
    expect(screen.getByDisplayValue("2÷")).toBeInTheDocument();
    userEvent.click(screen.getByRole("button", { name: "÷" }));
    expect(screen.getByDisplayValue("2÷")).toBeInTheDocument();
  });
  test.todo("「.」ボタンをクリックすると、数式の末尾に.が追加される");
  test.todo("数式が空のとき、「.」ボタンをクリックしても表示は変化しない");
  test.todo(
    "数式の末尾が小数点または演算子のとき、「.」ボタンをクリックしても表示は変化しない"
  );
  test.todo(
    "数式の最後の数字がすでに小数点を含む場合、「.」ボタンをクリックしても表示は変化しない"
  );
  // test("表示されている数式の最後の数字が0の場合、続けて数字をクリックしても表示は変化しない", () => {
  //   render(<App />);
  //   userEvent.click(screen.getByText("5"));
  //   userEvent.click(screen.getByText("+"));
  //   userEvent.click(screen.getByText("0"));
  //   userEvent.click(screen.getByText("1"));
  //   expect(screen.getByDisplayValue("5+0")).toBeInTheDocument();
  // });
  // test("最初に0以外の数字をクリックしたあと数字をクリックすると、その数字が表示の末尾に追加される", () => {
  //   render(<App />);
  //   userEvent.click(screen.getByText("1"));
  //   userEvent.click(screen.getByText("0"));
  //   userEvent.click(screen.getByText("1"));
  //   userEvent.click(screen.getByText("4"));
  //   expect(screen.getByDisplayValue("1014")).toBeInTheDocument();
  // });
  test.todo("何も表示されていない状態で.をクリックしても表示は変化しない");
  test.todo(
    "数字がクリックされたあとに.をクリックすると、表示の末尾に.が追加される"
  );
  test.todo(
    "表示されている数式の最後の数字に.が含まれている場合、.をクリックしても表示は変化しない"
  );
  test.todo("少数の加減の結果を表示する");
});
