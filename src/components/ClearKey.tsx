import React from "react";
import "../styles/App.css";

type ClearKeyProps = {
  character: string;
  input: string;
  setInput: React.Dispatch<React.SetStateAction<string>>;
};

const ClearKey = (props: ClearKeyProps): JSX.Element => {
  const actionInput = () => {
    // inputをクリアする
    props.setInput("");
  };

  return (
    <>
      <button className="key key-wide" onClick={() => actionInput()}>
        {props.character}
      </button>
    </>
  );
};

export default ClearKey;
