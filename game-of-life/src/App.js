///////// Basic React Imports /////////
import React, { useState, useCallback, useRef } from 'react';
import produce, { setAutoFreeze } from 'immer';

import './App.css';

///////// State Managment (context API) /////////
import GameContext from './contexts/GameContext'

///////// Components /////////
import Rules from './components/rules/rules'


///////// Game Variables /////////
  let rowsNumber = 50;
  let columnsNumber = 50;
  let speed = 1000;
  let generation = 0;


///////// Coordinates To Find Cells Adjacent To Any Given Cell /////////
const adjacentCellCoordinates = [
  [-1, -1],
  [-1, 0],
  [-1, 1],
  [0, -1],
  [0, 1],
  [1, -1],
  [1, 0],
  [1, 1],
];


///////// Create An Empty Grid /////////
const emptyGrid = () => {
  const rows = [];
  for (let i = 0; i < rowsNumber; i++) {
    rows.push(Array.from(Array(columnsNumber), () => 0))
  };
  return rows;
}


///////// The App Itself /////////
function App() {
  const [grid, setGrid] = useState(() => {
    return emptyGrid()
  });
  console.log(grid)

  const [running, setRunning] = useState(false);

  const runningReference = useRef(running);
  runningReference.current = running

  
///////// Function That Starts The Simulation /////////
  const startGame = useCallback(() => {
    if(!runningReference.current) {
      return;
    }
    //////// Game Rules in Action ////////
    setGrid((currentGridValue) => {
      return produce(currentGridValue, gridCopy => {
        for (let i = 0; i < rowsNumber; i++) {
          for (let j = 0; j < columnsNumber; j++) {
            let adjacentCells = 0;
            adjacentCellCoordinates.forEach(([x, y]) => {
              const newI = i + x;
              const newJ = j + y;
              if (newI >= 0 && newI < rowsNumber && newJ >= 0 && newJ < columnsNumber) {
                adjacentCells += currentGridValue[newI][newJ]
              }
            })

            if (adjacentCells < 2 || adjacentCells > 3) {
              gridCopy[i][j] = 0;
            } else if (currentGridValue[i][j] === 0 && adjacentCells === 3) {
              gridCopy[i][j] = 1;
            }
          }
        }
      generation += 1;

      })
    });

    setTimeout(startGame, speed);
  }, [])


///////// JSX Being Returned For Rendering /////////
  return (
    <GameContext.Provider value={{grid}}>
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Conway's Game of Life</h1>
          <h3>Built by Tyler Alsop</h3>
        </header>
        <h2>Generation: {generation}</h2>
        <div className="game-container" style={{
          margin: '0 auto',
        }}>
          <div 
            className="grid-container"
            style={{
              display: 'grid',
              gridTemplateColumns: `repeat(${columnsNumber}, 10px)`
            }}
          >
            {grid.map((rows, i) => 
              rows.map((column, j) => (
                <div 
                  className="actual-grid"
                  key = {`${i}-${j}`}
                  onClick = {() => {
                    if (running){
                      return
                    }
                    const newGrid = produce(grid, gridCopy => {
                      gridCopy[i][j] = grid[i][j] ? 0 : 1;
                    });
                    setGrid(newGrid);
                  }}
                  style={{
                    width: 10, 
                    height: 10, 
                    backgroundColor: grid[i][j] ? "black" : "lightgray", 
                    border: "solid 1px black"
                  }}
                />
              ))
            )}

          </div>
          <div className="buttons-container">
            <div className="control-buttons">
              <h3>Controls:</h3>
              <button
                  className="start-stop" 
                  onClick={() => {
                      setRunning(!running);
                      if (!running) {
                          runningReference.current = true;
                          startGame();
                      }
                  }}
              >
                {running ? "STOP" : "START"}
              </button>
              <button 
                className="randomize-button" 
                onClick={() => {
                  const rows = [];
                  for (let i = 0; i < rowsNumber; i++){
                    rows.push(Array.from(Array(columnsNumber), () => Math.random() > 0.8 ? 1 : 0));
                  };
                
                  setGrid(rows)
                }} >
                RANDOMIZE GRID
              </button>
              <button 
                className="clear-button" 
                onClick={() => {
                  generation = 0;
                  setGrid(emptyGrid());
                      setRunning(!running);
                      if (!running) {
                          runningReference.current = true;
                      }
                }} >
                CLEAR GRID
              </button>
            </div>
            <div className="adjust-buttons">
              <div className="grid-size-buttons">
                <h3>Choose Grid Size:</h3>
                <button className="25-25-grid" onClick={() => {
                  rowsNumber = 25;
                  columnsNumber = 25;
                  setGrid(emptyGrid())
                }}>25 X 25 GRID</button>
                <button className="50-50-grid" onClick={() => {
                  rowsNumber = 50;
                  columnsNumber = 50;
                  setGrid(emptyGrid())
                }}>50 X 50 GRID</button>
                <button className="100-100-grid" onClick={() => {
                  rowsNumber = 100;
                  columnsNumber = 100;
                  setGrid(emptyGrid())
                }}>100 X 100 GRID</button>
              </div>
              <div className="speed-buttons">
                <h3>Choose Speed:</h3>
                <button className="default-speed" onClick={() => {
                  speed = 1000;
                }}>DEFAULT SPEED</button>
                <button className="speed-2" onClick={() => {
                  speed = 500;
                }}>SPEED X 2</button>
                <button className="speed-4" onClick={() => {
                  speed = 250;
                }}>SPEED X 4</button>
                <button className="speed-10" onClick={() => {
                  speed = 100;
                }}>SPEED X 10</button>
                <button className="speed-20" onClick={() => {
                  speed = 50;
                }}>SPEED X 20</button>
                <button className="speed-100" onClick={() => {
                  speed = 10;
                }}>SPEED X 100</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Rules />
    </GameContext.Provider>
  );
}

export default App;
