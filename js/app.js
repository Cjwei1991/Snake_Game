  
/*-------------------------------- Constants --------------------------------*/

const initialGameState = {
    snake: [
      { x: 10, y: 10 },  // Head
      { x: 9, y: 10 },   // Body segment
      { x: 8, y: 10 }    // Tail
    ],
    direction: 'RIGHT',
    food: { x: 15, y: 15 },
    score: 0,
    gameOver: false
  };

const speed = 1000;
const GRID_SIZE = 20;
const CELL_SIZE = canvas.width / GRID_SIZE
const ctx = canvas.getContext('2d');


/*---------------------------- Variables (state) ----------------------------*/
let timer;
let gameOver;


/*------------------------ Cached Element References ------------------------*/
// a. Constants for Results
const scoreDisplay = document.getElementById('score');
const gameOverScreen = document.getElementById('game-over');
const finalScoreDisplay = document.getElementById('final-score');

// b. Constants for buttons inside the 'controls' 
const upBtnEl = document.getElementById('up');
const leftdBtnEl = document.getElementById('left');
const rightBtnEl = document.getElementById('right');
const downBtnEl = document.getElementById('down');

// c. Board Display
const canvas = document.getElementById('game-board');


/*-------------------------------- Functions --------------------------------*/

const init =()=>{
    gameState = { ...initialGameState };
    render ();
    clearInterval(timer)
    timer = setInterval(runGame, speed);
}

const runGame = () =>{

    if (gameState.gameOver) return;
    moveSnake();
    checkCollision();
}

const moveSnake = ()=>{
const head = { ...gameState.snake[0] };

    switch (gameState.direction) {
        case 'UP':
            head.y -= 1;
            break;
        case 'DOWN':
            head.y += 1;
            break;
        case 'LEFT':
            head.x -= 1;
            break;
        case 'RIGHT':
            head.x += 1;
            break;
    }
}
gameState.snake.unshift(head);

    if (head.x === gameState.food.x && head.y === gameState.food.y) {
        gameState.score += 1;
        placeFood();
    } else {
        gameState.snake.pop();
    }

const placeFood =()=>{
gameState.food = {
        x: Math.floor(Math.random() * GRID_SIZE),
        y: Math.floor(Math.random() * GRID_SIZE)
    };
}

const checkCollision =()=>{
const head = gameState.snake[0];

    if (
        head.x < 0 || head.x >= GRID_SIZE ||
        head.y < 0 || head.y >= GRID_SIZE
    ) {
        gameState.gameOver = true;
    }

    for (let i = 1; i < gameState.snake.length; i++) {
        if (head.x === gameState.snake[i].x && head.y === gameState.snake[i].y) {
            gameState.gameOver = true;
        }
    }
  if (gameState.gameOver) {
        clearInterval(timer);}
}

const changeUpDir = ()=> {
if (gameState.direction !== 'DOWN') {
        gameState.direction = 'UP';}
}

const changeLeftDir = ()=> {
if (gameState.direction !== 'RIGHT') {
        gameState.direction = 'LEFT';}    
}

const changeRightDir = ()=> {
if (gameState.direction !== 'LEFT') {
        gameState.direction = 'RIGHT';}    
}
const changeDownDir = ()=> {
if (gameState.direction !== 'UP') {
        gameState.direction = 'DOWN';}    
}


const render = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Draw snake
    ctx.fillStyle = 'green';
    gameState.snake.forEach(segment => {
        ctx.fillRect(segment.x * CELL_SIZE, segment.y * CELL_SIZE, CELL_SIZE, CELL_SIZE);
    });

    // Draw food
    ctx.fillStyle = 'red';
    ctx.fillRect(gameState.food.x * CELL_SIZE, gameState.food.y * CELL_SIZE, CELL_SIZE, CELL_SIZE);

    // Update score display
    scoreDisplay.textContent = `Score: ${gameState.score}`;
};









/*----------------------------- Event Listeners -----------------------------*/


upBtnEl.addEventListener('click',changeUpDir);
leftdBtnEl.addEventListener('click',changeLeftDir);
rightBtnEl.addEventListener('click',changeRightDir);
downBtnEl.addEventListener('click',changeDownDir); 

