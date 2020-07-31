///////// Basic React Imports /////////
import React, { useState, useCallback, useRef } from 'react';
import { Route } from "react-router-dom";
import produce, { setAutoFreeze } from 'immer';

import './App.css';

///////// State Managment (context API) /////////
import GridContext from './contexts/GridContext'

///////// Components /////////
// import Grid from './components/grid/grid'
// import Buttons from './components/buttons/buttons'
import Rules from './components/rules/rules'



let rowsNumber = 50;
let columnsNumber = 50;
let speed = 1000;
let generation = 0;

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

const emptyGrid = () => {
  const rows = [];
  for (let i = 0; i < rowsNumber; i++) {
    rows.push(Array.from(Array(columnsNumber), () => 0))
  };
  return rows;
}

function App() {
  const [grid, setGrid] = useState(() => {
    return emptyGrid()
  });

  console.log(grid)

  const [running, setRunning] = useState(false);

  const runningReference = useRef(running);
  runningReference.current = running
  
  const startGame = useCallback(() => {
    if(!runningReference.current) {
      return;
    }
    //////// Game Rules in Action ////////
    setGrid((currentGridValue) => {
      generation += 1;

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
      })
    });

    setTimeout(startGame, speed);
  }, [])

  const enlargeGrid = dimensions => {
    console.log("Grid dimensions in enlargeGrid()", dimensions)
    setGrid([...grid, dimensions])
  }

  return (
    <GridContext.Provider value={{grid, enlargeGrid}}>
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Conway's Game of Life</h1>
          <h3>Built by Tyler Alsop</h3>
        </header>
        <div className="game-container">
          <Route path="/rules">
            <Rules />
          </Route>
          <div className="buttons-container">
            <button onClick={() => {
              setRunning(!running);
              if (!running) {
                runningReference.current = true;
                startGame();
              }

            }}>
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
              }} >
              CLEAR GRID
            </button>
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
          <h3>Generation: {generation}</h3>

          <div 
            className="temp-grid-container"
            style={{
              paddingLeft: 700,
              paddingTop: 50,
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
          {/* <Grid className="grid"></Grid> */}
          {/* <Buttons className="buttons"></Buttons> */}

        </div>
      </div>
    </GridContext.Provider>
  );
}

export default App;
