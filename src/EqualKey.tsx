import React from "react";
import BigNumber from "bignumber.js";
import "./App.css";

type KeyProps = {
  character: string;
  input: string;
  setInput: React.Dispatch<React.SetStateAction<string>>;
};

const EqualKey = (props: KeyProps): JSX.Element => {
  const calculate = () => {
    const numbersWithOperator = props.input.split(/(?=[+-])/);
    return numbersWithOperator.reduce<BigNumber>(
      (result: BigNumber, number): BigNumber => {
        return result.plus(new BigNumber(number));
      },
      new BigNumber(0)
    );
  };

  const actionInput = () => {
    const operators = ["+", "-"];
    const inputLastCharacter = props.input[props.input.length - 1];
    if (operators.includes(inputLastCharacter) || inputLastCharacter === ".") {
      // inputの最後の文字が演算子もしくは.だった場合、returnする
      return;
    }
    // 計算結果をinputにセットする
    const result = calculate();
    props.setInput(String(result));
  };

  return (
    <>
      <button className="key" onClick={() => actionInput()}>
        {props.character}
      </button>
    </>
  );
};

export default EqualKey;
