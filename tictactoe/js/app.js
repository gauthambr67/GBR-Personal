const reference = {
  player1: "X",
  player2: "O",
  tie: "C",
};

const winningCombination = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

let board,
  turn = 0,
  winner;

const squares = document.querySelectorAll(".square");
const reset = document.querySelector("button");
const headerMsg = document.querySelector("#header");
const message = document.querySelector("#winner");

squares.forEach(function (square) {
  square.addEventListener("click", handleMove);
});

reset.addEventListener("click", initialize);

function handleMove(e) {
  value = parseInt(this.dataset.value);
  if (board[value]) return;
  if (winner) return;

  if (turn % 2 == 0) {
    board[value] = reference.player1;
    e.target.querySelector("div").innerHTML = reference.player1;
  } else {
    board[value] = reference.player2;
    e.target.querySelector("div").innerHTML = reference.player2;
  }
  turn += 1;

  winner = getWinner();
}

function getWinner() {
  for (let i = 0; i < winningCombination.length; i++) {
    if (
      board[winningCombination[i][0]] == reference.player1 &&
      board[winningCombination[i][1]] == reference.player1 &&
      board[winningCombination[i][2]] == reference.player1
    ) {
      messageStyling("Congratulations! Player 1 has won the game!");
      return reference.player1;
    } else if (
      board[winningCombination[i][0]] == reference.player2 &&
      board[winningCombination[i][1]] == reference.player2 &&
      board[winningCombination[i][2]] == reference.player2
    ) {
      messageStyling("Congratulations! Player 2 has won the game!");
      return reference.player2;
      // if(board[winningCombination[i][0]])
    } else if (checkIfBoardIsFull()) {
      messageStyling("Oh no, it's a tie!");
      return reference.tie;
    }
  }
}

function messageStyling(messageText) {
  headerMsg.setAttribute("class", "hidden");
  message.innerHTML = messageText;
  message.style.fontFamily = "Georgia";
  message.style.margin = "30px";
  message.style.fontSize = "30px";
  message.style.color = "darkgreen";
}

function checkIfBoardIsFull() {
  // loop through the board, if you hit a null out of the 9 that means the board isnt full
  for (let i = 0; i < board.length; i++) {
    if (board[i] === null) {
      return false;
    }
  }

  return true;
}

initialize();

function initialize() {
  board = [null, null, null, null, null, null, null, null, null];
  turn = 0;
  winner = null;
  squares.forEach(function (square) {
    square.querySelector("div").innerHTML = "";
  });
  headerMsg.removeAttribute("class", "hidden");
  message.innerHTML = "";
  message.style.margin = "0px";
}
