import React from "react";
import "./App.css";

type KeyProps = {
  character: string;
  input: string;
  setInput: React.Dispatch<React.SetStateAction<string>>;
};

const Key = (props: KeyProps): JSX.Element => {
  const actionInput = () => {
    props.setInput("");
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
