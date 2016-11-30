



// === need a board ===
// board has total of 9 cells
// create cells associated with a letter/key

// var board = [];

var board = [];
var boardKey = 'abcdefghi';


function buildBoard() {
    var boardBorder = "=======" + "\n";
    for(var i = 0; i < 9; i += 3) {
        boardString += (board[i] || boardKey[i]) + "|";
        boardString += (board[i+1] || boardKey[i+1]) + "|";
        boardString += (board[i+2] || boardKey[i+2]) + "\n";
    }
    boardBorder += "=======";
    console.log(boardBorder);
    return board;
}

buildBoard();

// get user input
// use readline() for entering input in terminal

// console.log("Type x or o press <ENTER>:\t");
// var userInput = readline();

// console.log("User input: " + userInput);
