///////// Imports /////////

import React, { useContext } from "react";
import GridContext from "../../contexts/GridContext";


///////// Components /////////

const Box = props => {
    selectBox = () => {
        selectBox(gridData.row, gridData.column)
    }
    return (
        <div className="box-container">
            <p>Box Goes Here</p>
            <div 
            className={boxClass} 
            id={id}
            onClick={selectBox}
            >

            </div>
        </div>
    )
}

export default Box;