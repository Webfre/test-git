import "./App.css";
import ButtonColor from "./components/ButtonColor";
import Input from "./components/Input";
import Item from "./components/Item";

import { useState } from "react";

function App() {
  const [color, setColor] = useState("red");

  const changeColorTheme = () => {};

  return (
    <div className="App">
      <ButtonColor />
      <Input />
      <Item />
    </div>
  );
}

export default App;
