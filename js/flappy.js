
//bakgrunden
let board;
let context;
let boardWidth = 400;
let boardHeight = 700;


//fågeln
let birdWidth = 30;
let birdHeight = 40;
let birdX = boardWidth/8;
let birdY = boardHeight/2;

let bird = {
    x : birdX,
    y : birdY,
    width : birdWidth,
    height : birdHeight
}


window.onload = function() {
    board = document.getElementById("board");
    board.height = boardHeight;
    board.width = boardWidth;
    context = board.getContext("2d");
}