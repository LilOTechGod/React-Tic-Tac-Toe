import { Square } from "./components/Square/Square";
import "./App.css";
import { useState } from "react";
import React from 'react'

function App() {
  // ! This is JavaScript
  // const propVariable = 'This is a prop'
  const [squares, setSquares] = useState(["", "", "", "", "", "", "", "", ""]);
  const [player, setPlayer] = useState(true);

  const handleClick = () => {
    setSquares(["", "", "", "", "", "", "", "", ""]);
    setPlayer(true);
  }

  return (
    <div className="App">
      <div className="container">
        {squares.map((value, index) => {
          return (
            <Square
              squareValue={value}
              index={index}
              squares={squares}
              setSquares={setSquares}
              player={player}
              setPlayer={setPlayer}
            />
          );
        })}
      </div>
      <button onClick={handleClick}>Reset</button>
    </div>
  );
}

export default App;
