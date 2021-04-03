import React from "react";
import "./App.css";

type KeyProps = {
  input: string;
  setInput: React.Dispatch<React.SetStateAction<string>>;
};

const ZeroKey = (props: KeyProps): JSX.Element => {
  const actionInput = () => {
    const numbers = props.input.split(/[+-]/);
    if (numbers[numbers.length - 1] === "0") {
      return;
    }
    props.setInput(props.input + "0");
  };

  return (
    <>
      <button className="key key-wide" onClick={() => actionInput()}>
        0
      </button>
    </>
  );
};

export default ZeroKey;
