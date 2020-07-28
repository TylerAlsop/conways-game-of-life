///////// Imports /////////

import React, { useContext, useState } from "react";
import GridContext from "../../contexts/GridContext";

// import Box from "../box/box"

///////// Components /////////


const Grid = props => {
    const { grid, enlargeGrid } = useContext(GridContext)
    // const gridData = {
    //     speed: 100,
    //     rows: 30,
    //     columns: 50
    // }
    // const width = (gridData.rows * 16) + 1;
    // const rowsArray = []
    // const boxClass = ""
    // for (i = 0; i < gridData.rows; i++) {
    //     for (j = 0; j < gridData.columns; j++){
    //         let boxId = i + "_" + j;
    //         boxClass = gridState.gridFull[i][j] ? "box on" : "box off"
    //         rowsArray.push(
    //             <Box
    //                 boxClass={boxClass}
    //                 key={boxId}
    //                 row={i}
    //                 column={j}
    //                 selectBox={selectBox}
    //             />

    //         )
    //     }
    // }


    const gridState = {
        generation: 0,
        // gridFull: Array(gridData.rows).fill().map(() => Array(gridData.columns).fill(false))
    }

    return (
        <div className="grid-container">
            <h3>Grid Goes here!</h3>
            <p>Generation Number: {gridState.generation}</p>
            {/* <div className="grid" style={{width: width}}>
                {rowsArray}
            </div> */}
            
            <div className="enlargeGrid-function-placeholder">
                {enlargeGrid}
            </div>
        </div>
    )
}

export default Grid;