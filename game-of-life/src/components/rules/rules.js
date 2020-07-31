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
                <h3 className="rules-header-1">1. Choose Your Board Size</h3>
                    <p>a. The default size of the grid is 50 X 50, but may chose the size of grid you want to play on by clicking on one of the following buttons and the grid will automatically change to the size of your choosing:</p>
                    <p>25 X 25 GRID</p>
                    <p>50 X 50 GRID</p>
                    <p>100 X 100 GRID</p>

                <h3 className="rules-header-1">2. Choose Your Speed</h3>
                    <p>a. The default speed is one second per generation, but you can choose the speed at which the game moves on to the next generation. The options are as follows:</p>
                    <p>DEFAULT SPEED</p>
                    <p>SPEED X 2</p>
                    <p>SPEED X 4</p>
                    <p>SPEED X 10</p>
                    <p>SPEED X 20</p>
                    <p>SPEED X 100</p>


                <h3 className="rules-header-1">3. Setup Your Board</h3>
                    <p>a. Click on any square to make it alive. Click it again to make it dead. You may have as many or as few live cells as you like. Have fun making shapes and designs.</p>
                    <p>b. You may click the "RANDOMIZE GRID" button and it will populate the grid with a random assortment of alive and dead cells. After clicking this button you can still adjust the board as you like by clicking on cells.</p>

                <h3 className="rules-header-1">4. Start The Game!</h3>
                    <h4>When you've setup the board the way you want it you can now click on the "START" button! </h4>
                    <h4>After starting the game:</h4>
                    <p>a. The "START" button will change into a "STOP" button which you may click at any time to toggle between the game running and not running (like a play/pause button).</p>
                    <p>b. The generation counter will count up with each new generation.</p>
                    
                <h3 className="rules-header-1">NOTE:</h3>
                    <p>The grid squares are not clickable while the game is running, but you may still click on the "RANDOMIZE GRID" button and change the speed.</p>
                    <p>*If the grid does not change from one generation to another then the generation will not appear to be counting. Only upon clicking on the "STOP" button will you see what generation the game actually made it to.</p>
                


        </div>
    )
}

export default Rules;