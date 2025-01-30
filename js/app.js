  
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
const liftdBtnEl = document.getElementById('lift');
const rightBtnEl = document.getElementById('right');
const downBtnEl = document.getElementById('down');

// c. Board Display
const canvas = document.getElementById('game-board');


/*-------------------------------- Functions --------------------------------*/

const init =()=>{
    initialGameState.snake = [
        { x: 10, y: 10 },  // Head
        { x: 9, y: 10 },   // Body segment
        { x: 8, y: 10 }    // Tail
      ];
    initialGameState.food = { x: 15, y: 15 };
    initialGameState.direction = 'RIGHT';
    initialGameState.score = 0;
    initialGameState.gameOver = false;
    render ();
    clearInterval(timer)
    timer = setInterval(runGame, speed);
}

const runGame = () =>{

    if (initialGameState.gameOver) return;
    moveSnake();
    checkCollision();
}

const moveSnake = ()=>{

}

const checkCollision =()=>{

}

const changeUpDir = ()=> {

}

const changeLiftDir = ()=> {
    
}

const changeRightDir = ()=> {
    
}
const changeDownDir = ()=> {
    
}












/*----------------------------- Event Listeners -----------------------------*/


upBtnEl.addEventListener('click',changeUpDir);
liftdBtnEl.addEventListener('click',changeLiftDir);
rightBtnEl.addEventListener('click',changeRightDir);
downBtnEl.addEventListener('click',changeDownDir); 

