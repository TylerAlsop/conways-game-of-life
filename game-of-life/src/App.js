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

function App() {
  const [grid, setGrid] = useState([]);
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
            <Grid className="grid"></Grid>
            {/* <Buttons className="buttons"></Buttons> */}
            <Route path="/rules">
              <Rules />
            </Route>
          </div>
      </div>
    </GridContext.Provider>
  );
}

export default App;
