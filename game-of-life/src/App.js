///////// Basic React Imports /////////
import React, { useState } from 'react';
import { Route } from "react-router-dom";

import './App.css';

///////// State Managment (context API) /////////
import GridContext from './contexts/GridContext'

///////// Components /////////
import Grid from './components/grid/grid'
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
            <div 
              className="temp-grid-container"
              style={{
                display: 'grid',
                gridTemplateColumns: `repeat(${columnsNumber}, 20px)`
              }}
            >
              {grid.map((rows, i) => 
                rows.map((column, j) => (
                  <div 
                    className="actual-grid"
                    key = {`${i}-${j}`}
                    onClick = {() => {
                      grid[i][j]
                    }}
                    style={{
                      width: 20, 
                      height: 20, 
                      backgroundcolor: grid[i][j] ? "black" : "lightgray", 
                      border: "solid 1px black"
                    }}
                  />
                ))
              )}

            </div>
            <Grid className="grid"></Grid>
            {/* <Buttons className="buttons"></Buttons> */}

          </div>
      </div>
    </GridContext.Provider>
  );
}

export default App;
