import { useState } from "react";
import "./App.css";

export function spacesBeforeCamelCase(colorName) {
  return colorName.replace(/\B([A-Z])\B/g, " $1");
}

function App() {
  const [color, setColor] = useState("MediumVioletRed");
  const [checked, setChecked] = useState(false);
  const newColor =
    color === "MediumVioletRed" ? "MidnightBlue" : "MediumVioletRed";

  return (
    <>
      <button
        onClick={() => setColor(newColor)}
        style={{ backgroundColor: checked ? "gray" : color }}
        disabled={checked}
      >
        change color to {spacesBeforeCamelCase(newColor)}
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
