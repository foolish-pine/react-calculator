import React from "react";
import "../styles/App.css";

type KeyProps = {
  input: string;
  setInput: React.Dispatch<React.SetStateAction<string>>;
};

const ZeroKey = (props: KeyProps): JSX.Element => {
  const actionInput = () => {
    const numbers = props.input.split(/(?=[+\-×÷])/);
    if (
      numbers[numbers.length - 1] === "0" ||
      numbers[numbers.length - 1] === "+0" ||
      numbers[numbers.length - 1] === "-0"
    ) {
      // inputに含まれる数字のうち、最後の数字の最上位が0の場合、returnする
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
