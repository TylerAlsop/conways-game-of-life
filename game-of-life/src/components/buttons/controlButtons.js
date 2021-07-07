import React, { useContext } from "react";
import ProductContext from "../contexts/ProductContext";

const ControlButtons = props => {

    return (
        <div className="control-buttons">
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
              }} >
              CLEAR GRID
            </button>
        </div>
    )
}

export default ControlButtons