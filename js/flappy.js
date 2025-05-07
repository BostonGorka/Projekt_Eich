let birdClick = document.getElementById('board');

window.addEventListener('keydown', Clickbird);

let board;
let context;
let boardWidth = 390;
let boardHeight = 650;
let pipeX = 100;
let pipeY = 0;

const pipeArray = [];

let velocityY = 0;


let pipeHeight = Math.random() * 500;
let pipeWidth = 55;

let pixelsPassed = 0;


let birdWidth = 45;
let birdHeight = 40;
let birdX = boardWidth / 8;
let birdY = boardHeight / 2;

board = document.getElementById("board");
board.height = boardHeight;
board.width = boardWidth;
context = board.getContext("2d");

let pipes = {
    x: pipeX,
    y: pipeY,
    width: pipeWidth,
    height: pipeHeight
}


let bird = {
    x: birdX,
    y: birdY,
    width: birdWidth,
    height: birdHeight
}

update();
Deathbird();

function update() {
    requestAnimationFrame(update);

    pixelsPassed++;

    if (pixelsPassed === 200) {
        pipeArray.push({
            x: 390,
            y: pipeY,
            width: 55,
            height: Math.random() * 130 + 135
        });
        pixelsPassed = 0;
    }

    velocityY = velocityY - 0.15;
    birdY = birdY - velocityY;



    context.clearRect(0, 0, boardWidth, boardHeight);
    for (let i = 0; i < pipeArray.length; i++) {

        pipeArray[i].x = pipeArray[i].x - 2;

        context.fillStyle = "rgb(31, 68, 8)";
        context.fillRect(pipeArray[i].x, pipeArray[i].y, pipeArray[i].width, pipeArray[i].height);

        context.fillStyle = "rgb(31, 68, 8)";
        context.fillRect(pipeArray[i].x, pipeArray[i].y + pipeArray[i].height + 155, pipeArray[i].width, pipeArray[i].height + 500);
    }

    context.fillStyle = "rgb(245, 148, 34)";
    context.fillRect(birdX, birdY, bird.width, bird.height);

    console.log(birdX, birdY, bird.width, bird.height);

}

function Clickbird(event) {
    if (event.code == 'Space') {
        velocityY = 4.25;
    }

}

function Deathbird(){
    
}




