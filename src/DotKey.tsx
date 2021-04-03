import React from "react";
import "./App.css";

type KeyProps = {
  input: string;
  setInput: React.Dispatch<React.SetStateAction<string>>;
};

const DotKey = (props: KeyProps): JSX.Element => {
  const operators = ["+", "-"];
  const numbers = props.input.split(/[+-]/);
  const actionInput = () => {
    if (props.input[props.input.length - 1] === ".") {
      return;
    } else if (operators.includes(props.input[props.input.length - 1])) {
      return;
    } else if (numbers[numbers.length - 1].indexOf(".") !== -1) {
      return;
    } else {
      props.setInput(props.input + ".");
    }
  };

  return (
    <>
      <button className="key" onClick={() => actionInput()}>
        .
      </button>
    </>
  );
};

export default DotKey;
