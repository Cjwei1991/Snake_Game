# browser-based-game-project
Snake Game
![image](https://github.com/user-attachments/assets/0d009596-ca86-45cd-930d-6177f08df055)


Pseudocode

// 1) Define variables to track game state:
//    Snake body segments (array of positions)
//    Current movement direction
//    Food position
//    Player score
//    Game over status
//    HTML elements for display (canvas, score, game over message, direction buttons)

// 2) Define required constants:
//    GRID_SIZE - Number of grid units (20x20)
//    SPEED - Game loop interval (1000ms)
//    DIRECTIONS - Valid movement options ('UP', 'DOWN', 'LEFT', 'RIGHT')
//    COLORS - Visual styling for snake segments and food

// 3) Handle player button clicks:
//    When direction button is clicked:
//    a) Get requested direction from button's data attribute
//    b) Prevent 180-degree turns (can't reverse current direction)
//    c) Update movement direction if valid
//    d) Store new direction in game state

// 4) Handle computer-generated elements:
//    When generating new food position:
//    a) Randomly select x/y coordinates within GRID_SIZE
//    b) Verify position doesn't overlap with snake body
//    c) Store valid position in game state
//    d) Return new food position for game use

// 5) Game logic
//   1. Create a new head based on the direction.
//   2. Add the new head to the snake array.
//   3. Check if the new head is on the food.
//   4. If yes, generate new food and increase score. Don't pop the tail, so length increases by 1.
//   5. If no, pop the tail, maintaining length.



Deployed Game: https://cjwei1991.github.io/Snake_Game/
Instructions:
Use the arrow keys on your keyboard or click on the on-screen directional buttons to control the snake.
Eat the red food to grow longer and increase your score.
Avoid crashing into the walls or your own tail.
Reach a score of 10 to win the game!

Technologies Used
HTML for structuring the game interface.
CSS for styling the layout and elements.
JavaScript for game logic, state management, and user interaction.
Canvas API for drawing the snake and food on the game board.

Next Steps
Difficulty Levels: Introduce multiple difficulty settings (e.g., slow, medium, fast) for a more customized gaming experience.
