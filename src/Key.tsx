import React from "react";
import "./App.css";

type KeyProps = {
  character: string;
  input: string;
  setInput: React.Dispatch<React.SetStateAction<string>>;
};

const Key = (props: KeyProps): JSX.Element => {
  const actionInput = () => {
    const numbers = props.input.split(/[+-]/);
    if (numbers[numbers.length - 1] === "0") {
      return;
    }
    props.setInput(props.input + props.character);
  };

  return (
    <>
      <button className="key" onClick={() => actionInput()}>
        {props.character}
      </button>
    </>
  );
};

export default Key;
