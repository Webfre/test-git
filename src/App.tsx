import "./App.css";
import ButtonColor from "./components/ButtonColor";
import Input from "./components/Input";
import Item from "./components/Item";

import { useState } from "react";

function App() {
  const [color, setColor] = useState<string>("red");

  const changeColorTheme = (color: string) => {
    console.log(`Hello ${color}`);
  };

  return (
    <div className="App" style={{ background: color }}>
      <ButtonColor fn={changeColorTheme} color={color} setColor={setColor} />
      <Input />
      <Item />
    </div>
  );
}

export default App;
