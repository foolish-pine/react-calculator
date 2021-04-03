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
    if (operators.includes(props.input[props.input.length - 1])) {
      return;
    } else if (props.input[props.input.length - 1] === ".") {
      return;
    }
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
