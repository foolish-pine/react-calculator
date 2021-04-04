import React from "react";
import BigNumber from "bignumber.js";
import "../App.css";

type KeyProps = {
  character: string;
  input: string;
  setInput: React.Dispatch<React.SetStateAction<string>>;
};

const EqualKey = (props: KeyProps): JSX.Element => {
  // 計算処理
  const calculate = () => {
    return props.input
      .split(/(?=[+-])/)
      .map((block) => {
        // inputを+もしくは-ごとに分割する
        if (block.indexOf("×") !== -1 || block.indexOf("÷") !== -1) {
          // ×もしくは÷を含むブロックを計算する
          return block
            .split(/(?=[×÷])/)
            .reduce<BigNumber>((result: BigNumber, number) => {
              if (number[0] === "×") {
                return result.times(number.slice(1));
              } else if (number[0] === "÷") {
                return result.div(number.slice(1));
              } else {
                return result.times(number);
              }
            }, new BigNumber(1));
        }
        return block;
      })
      .reduce<BigNumber>((result: BigNumber, number) => {
        // 最後にすべてを足す
        return result.plus(number);
      }, new BigNumber(0));
  };

  const actionInput = () => {
    const operators = ["+", "-", "×", "÷"];
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
