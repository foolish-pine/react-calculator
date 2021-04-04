import React from "react";
import "../App.css";

type KeyProps = {
  character: string;
  input: string;
  setInput: React.Dispatch<React.SetStateAction<string>>;
};

const OperatorKey = (props: KeyProps): JSX.Element => {
  const operators = ["+", "-", "×", "÷"];
  const inputLastCharacter = props.input[props.input.length - 1];
  const actionInput = () => {
    if (props.input === "" || inputLastCharacter === ".") {
      // inputの最後の文字が.だった場合、returnする
      return;
    } else if (
      operators.includes(inputLastCharacter) &&
      !(
        (inputLastCharacter === "×" || inputLastCharacter === "÷") &&
        props.character === "-"
      )
    ) {
      // inputの最後の文字が演算子だった場合、returnする。ただし、その演算子が×もしくは÷でクリックしたボタンの演算子が-のときはreturnしない。
      return;
    } else {
      // 末尾に演算子を加える
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
