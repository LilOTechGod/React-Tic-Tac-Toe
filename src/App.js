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

  const calculateWinner = (arr) => {
    let lines = [[0,1,2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ]

  for(let i=0; i< lines.length; i++) {
    const [a,b,c] = lines[i];
    if( arr[a] && arr[a] === arr[b] && arr[a] === arr[c]) {
      return `${arr[a]} won!`;
    }
  }
    return 'Who will win?';
  }

  return (
    <div className="App">
        <span>{calculateWinner(squares)}</span>
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
