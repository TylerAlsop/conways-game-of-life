import React from "react";

const Rules = () => {
    return (
        <div className="rules-container">
            <h1 className="rules-page-title">How The Game Works</h1>
            <h2 className="fundamentals-tile">Fundamentals</h2>
                <h3 className="fundamentals-header-1">1. There is a grid of squares.</h3>

                <h3 className="fundamentals-header-1">2. The grid will regenerate every second.</h3>
                    <p>a. What the grid looked like on one generation will determine what the next generation will look like.</p>

                <h3 className="fundamentals-header-1">3. Each square can be in one of two states: Alive or Dead.</h3>
                    <p>a. If the square is alive then it will appear black on the screen.</p>
                    <p>b. If the square is dead then it will appear clear on the screen.</p>

                <h3 className="fundamentals-header-1">4. On every generation each square will be evaluated by looking at the 8 squares that surround it.</h3>
                    <h4 className="fundamentals-header-2">What will happen on the next generation of the grid?</h4>

                        <p>a. For a live square:</p>
                            <p>--If 2-3 squares around it are alive then the square will remain alive.</p>
                            <p>--If less than 2 squares around it are alive then the square will die from underpopulation.</p>
                            <p>--If more than 3 squares around it are alive then the square will die from underpopulation.</p>

                        <p>b. For a dead square:</p>
                            <p>--If there are exactly 3 squares around it that are alive then the square will come to life.</p>
                            <p>--If there are greater or less than 3 then the square will remain dead.</p>

            <h2>Rules for Playing</h2>

        </div>
    )
}

export default Rules;