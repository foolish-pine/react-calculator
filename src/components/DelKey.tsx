import React from "react";
import "../App.css";

type KeyProps = {
  character: string;
  input: string;
  setInput: React.Dispatch<React.SetStateAction<string>>;
};

const DelKey = (props: KeyProps): JSX.Element => {
  const actionInput = () => {
    // inputの最後の文字を削除する
    props.setInput(props.input.slice(0, -1));
  };

  return (
    <>
      <button className="key" onClick={() => actionInput()}>
        {props.character}
      </button>
    </>
  );
};

export default DelKey;
