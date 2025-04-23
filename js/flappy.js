let birdClick = document.getElementById('board');

birdClick.addEventListener('click', Clickbird);

let board;
let context;
let boardWidth = 390;
let boardHeight = 650;

let pipeHeight = 220;
let pipeWidth = 55;


let birdWidth = 45;
let birdHeight = 40;
let birdX = boardWidth / 8;
let birdY = boardHeight / 2;

board = document.getElementById("board");
board.height = boardHeight;
board.width = boardWidth;
context = board.getContext("2d");

let pipes = {
    x: 80,
    y: 0,
    width: pipeWidth,
    height: pipeHeight
}

let bird = {
    x: birdX,
    y: birdY,
    width: birdWidth,
    height: birdHeight
}

context.fillStyle = "rgb(31, 68, 8)";
context.fillRect(pipes.x, pipes.y, pipes.width, pipes.height);

context.fillStyle = "rgb(31, 68, 8)";
context.fillRect(pipes.x, pipes.y, pipes.width, pipes.height);

context.fillStyle = "rgb(245, 148, 34)";
context.fillRect(bird.x, bird.y, bird.width, bird.height);

function Clickbird(event){
    
}




