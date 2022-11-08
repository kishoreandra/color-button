import { useState } from "react";
import "./App.css";

function App() {
  const [color, setColor] = useState("red");
  const newColor = color === "red" ? "blue" : "red";

  return (
    <button
      onClick={() => setColor(newColor)}
      style={{ backgroundColor: color }}
    >
      change color to {newColor}
    </button>
  );
}

export default App;
