///////// Basic React Imports /////////
import React, { useState } from 'react';
import './App.css';

///////// State Managment (context API) /////////
import GridContext from './contexts/GridContext'

///////// Components /////////
// import Grid from './components/grid/grid'
// import Buttons from './components/buttons/buttons'
// import Rules from './components/rules/rules'

function App() {
  const [grid, setGrid] = useState([]);

  return (
    <GridContext.Provider value={{grid}}>
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Conway's Game of Life</h1>
          <h3>Built by Tyler Alsop</h3>
          <div className="game-container">
            {/* <Grid className="grid"></Grid>
            <Buttons className="buttons"></Buttons> */}
          </div>

        </header>
      </div>
    </GridContext.Provider>
  );
}

export default App;
