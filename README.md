# conways-game-of-life
## How The Game Works
### Fundamentals
1. There is a grid of squares.

2. The grid will regenerate every second.
- a. What the grid looked like on one generation will determine what the next generation will look like.

3. Each square can be in one of two states: Alive or Dead.
- a. If the square is alive then it will appear black on the screen.
- b. If the square is dead then it will appear clear on the screen.

4. On every generation each square will be evaluated by looking at the 8 squares that surround it.
What will happen on the next generation of the grid?

- a. For a live square:
-- If 2-3 squares around it are alive then the square will remain alive.
-- If less than 2 squares around it are alive then the square will die from underpopulation.
-- If more than 3 squares around it are alive then the square will die from underpopulation.

b. For a dead square:
-- If there are exactly 3 squares around it that are alive then the square will come to life.
-- If there are greater or less than 3 then the square will remain dead.

Rules for Playing
1. Choose Your Board Size
- The default size of the grid is 50 X 50, but may chose the size of grid you want to play on by clicking on one of the following buttons and the grid will automatically change to the size of your choosing:
- [ ] 25 X 25 GRID
- [ ] 50 X 50 GRID
- [ ] 100 X 100 GRID

2. Choose Your Speed
- a. The default speed is one second per generation, but you can choose the speed at which the game moves on to the next generation. The options are as follows:
- [ ] DEFAULT SPEED
- [ ] SPEED X 2
- [ ] SPEED X 4
- [ ] SPEED X 10
- [ ] SPEED X 20
- [ ] SPEED X 100


3. Setup Your Board
a. Click on any square to make it alive. Click it again to make it dead. You may have as many or as few live cells as you like. Have fun making shapes and designs.
b. You may click the "RANDOMIZE GRID" button and it will populate the grid with a random assortment of alive and dead cells. After clicking this button you can still adjust the board as you like by clicking on cells.

4. Start The Game!
When you've setup the board the way you want it you can now click on the "START" button! 
After starting the game:
a. The "START" button will change into a "STOP" button which you may click at any time to toggle between the game running and not running (like a play/pause button).
b. The generation counter will count up with each new generation.

NOTE:
The grid squares are not clickable while the game is running, but you may still click on the "RANDOMIZE GRID" button and change the speed.
*If the grid does not change from one generation to another then the generation will not appear to be counting. Only upon clicking on the "STOP" button will you see what generation the game actually made it to.