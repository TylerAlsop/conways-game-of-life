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



const rowsNumber = 50;
const columnsNumber = 50;


function App() {
  const [grid, setGrid] = useState(() => {
    const rows = [];
    for (let i = 0; i < rowsNumber; i++) {
      rows.push(Array.from(Array(columnsNumber), () => 0))
    }
    return rows
  });

  console.log(grid)

  const [running, setRunning] = useState(false);

  const referenceRunning = useRef(running);
  referenceRunning.current = running
  
  const startGame = useCallback(() => {
    if(!referenceRunning) {
      return
    }

    setTimeout(startGame, 1000);
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
          <button onClick={() => {
            setRunning(!running)
          }}>{running ? "STOP" : "START"}</button>
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
