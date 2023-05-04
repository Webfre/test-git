import React from "react";
import type { Dispatch, SetStateAction } from "react";

interface ButtonColorProps {
  fn: (color: string) => void;
  color: string;
  setColor: Dispatch<SetStateAction<string>>;
}

function ButtonColor({ fn, color, setColor }: ButtonColorProps) {
  const handleChangeColor = (color: string) => {
    const colorNew = color === "red" ? "green" : "red";
    setColor(colorNew);
    fn(colorNew);
  };

  return (
    <div>
      <button onClick={() => handleChangeColor(color)}>{color}</button>
    </div>
  );
}

export default ButtonColor;
