import React from "react";
import "./App.css";

type KeyProps = {
  character: string;
  input: string;
  setInput: React.Dispatch<React.SetStateAction<string>>;
};

const OperatorKey = (props: KeyProps): JSX.Element => {
  const operators = ["+", "-"];
  const actionInput = () => {
    if (
      props.input[props.input.length - 1] === props.character ||
      props.input[props.input.length - 1] === "."
    ) {
      return;
    } else if (operators.includes(props.input[props.input.length - 1])) {
      props.setInput(props.input.slice(0, -1) + props.character);
    } else {
      props.setInput(props.input + props.character);
    }
  };

  return (
    <>
      <button className="key" onClick={() => actionInput()}>
        {props.character}
      </button>
    </>
  );
};

export default OperatorKey;
