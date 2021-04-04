import React from "react";
import "./App.css";

type KeyProps = {
  character: string;
  input: string;
  setInput: React.Dispatch<React.SetStateAction<string>>;
};

const Key = (props: KeyProps): JSX.Element => {
  const actionInput = () => {
    const numbers = props.input.split(/(?=[+-])/);
    if (
      numbers[numbers.length - 1] === "0" ||
      numbers[numbers.length - 1] === "+0" ||
      numbers[numbers.length - 1] === "-0"
    ) {
      // inputに含まれる数字のうち、最後の数字が0の場合、returnする
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
