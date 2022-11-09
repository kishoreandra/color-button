import { useState } from "react";
import "./App.css";

function App() {
  const [color, setColor] = useState("red");
  const [checked, setChecked] = useState(false);
  const newColor = color === "red" ? "blue" : "red";

  return (
    <>
      <button
        onClick={() => setColor(newColor)}
        style={{ backgroundColor: checked ? "gray" : color }}
        disabled={checked}
      >
        change color to {newColor}
      </button>
      <label htmlFor="disable-button">Disable the button</label>
      <input
        type="checkbox"
        id="disable-button"
        checked={checked}
        onChange={(e) => setChecked(e.target.checked)}
      />
    </>
  );
}

export default App;
