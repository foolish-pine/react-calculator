import React, { useState } from "react";
import Key from "./Key";
import ZeroKey from "./ZeroKey";
import DotKey from "./DotKey";
import OperatorKey from "./OperatorKey";
import DelKey from "./DelKey";
import ClearKey from "./ClearKey";
import EqualKey from "./EqualKey";
import "../styles/App.css";

const App = (): JSX.Element => {
  const [input, setInput] = useState("");

  return (
    <>
      <div className="container">
        <input className="display" type="text" value={input} disabled />
        <div className="key-rows">
          <div className="key-row">
            <ClearKey character={"AC"} input={input} setInput={setInput} />
            <DelKey character={"Del"} input={input} setInput={setInput} />
            <OperatorKey character={"÷"} input={input} setInput={setInput} />
          </div>
          <div className="key-row">
            <Key character={"7"} input={input} setInput={setInput} />
            <Key character={"8"} input={input} setInput={setInput} />
            <Key character={"9"} input={input} setInput={setInput} />
            <OperatorKey character={"×"} input={input} setInput={setInput} />
          </div>
          <div className="key-row">
            <Key character={"4"} input={input} setInput={setInput} />
            <Key character={"5"} input={input} setInput={setInput} />
            <Key character={"6"} input={input} setInput={setInput} />
            <OperatorKey character={"-"} input={input} setInput={setInput} />
          </div>
          <div className="key-row">
            <Key character={"1"} input={input} setInput={setInput} />
            <Key character={"2"} input={input} setInput={setInput} />
            <Key character={"3"} input={input} setInput={setInput} />
            <OperatorKey character={"+"} input={input} setInput={setInput} />
          </div>
          <div className="key-row">
            <ZeroKey input={input} setInput={setInput} />
            <DotKey input={input} setInput={setInput} />
            <EqualKey character={"="} input={input} setInput={setInput} />
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
