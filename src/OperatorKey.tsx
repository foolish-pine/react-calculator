import React from "react";
import "./App.css";

type KeyProps = {
  character: string;
  input: string;
  setInput: React.Dispatch<React.SetStateAction<string>>;
};

const OperatorKey = (props: KeyProps): JSX.Element => {
  const operators = ["+", "-"];
  const inputLastCharacter = props.input[props.input.length - 1];
  const actionInput = () => {
    if (inputLastCharacter === ".") {
      // inputの最後の文字が.だった場合、returnする
      return;
    } else if (operators.includes(inputLastCharacter)) {
      // inputの最後の文字が演算子だった場合、その演算子をクリックした演算子に置換する
      props.setInput(props.input.slice(0, -1) + props.character);
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
