const GameBoard = (() => {
  // get DOM elements
  const gameBoard = document.querySelectorAll(".space");

  let whoseTurn = true;

  for (let i = 0; i < gameBoard.length; i++) {
    gameBoard[i].addEventListener("click", () => playerTurn(gameBoard[i]));
  }

  // functions
  const playerTurn = (space) => {
    whoseTurn ? (space.innerHTML = "X") : (space.innerHTML = "O");
    whoseTurn = !whoseTurn;
    let winner = checkForWinner(gameBoard);
    if (winner === "X") alert("Player 1 wins!");
    else if (winner === "O") alert("Player 2 wins!");
  };

  const checkForWinner = (gameBoard) => {
    if (checkRows()) return checkRows();
    if (checkCols()) return checkCols();
    if (checkDiagonals()) return checkDiagonals();
  };

  const checkRows = () => {
    if (
      gameBoard[0].innerHTML === gameBoard[1].innerHTML &&
      gameBoard[1].innerHTML === gameBoard[2].innerHTML
    ) {
      return gameBoard[0].innerHTML;
    }

    if (
      gameBoard[3].innerHTML === gameBoard[4].innerHTML &&
      gameBoard[4].innerHTML === gameBoard[5].innerHTML
    ) {
      return gameBoard[3].innerHTML;
    }

    if (
      gameBoard[6].innerHTML === gameBoard[7].innerHTML &&
      gameBoard[7].innerHTML === gameBoard[8].innerHTML
    ) {
      return gameBoard[6].innerHTML;
    }
  };

  const checkCols = () => {
    if (
      gameBoard[0].innerHTML === gameBoard[3].innerHTML &&
      gameBoard[3].innerHTML === gameBoard[6].innerHTML
    ) {
      return gameBoard[0].innerHTML;
    }

    if (
      gameBoard[1].innerHTML === gameBoard[4].innerHTML &&
      gameBoard[4].innerHTML === gameBoard[7].innerHTML
    ) {
      return gameBoard[1].innerHTML;
    }

    if (
      gameBoard[2].innerHTML === gameBoard[5].innerHTML &&
      gameBoard[5].innerHTML === gameBoard[8].innerHTML
    ) {
      return gameBoard[2].innerHTML;
    }
  };

  const checkDiagonals = () => {
    if (
      gameBoard[0].innerHTML === gameBoard[4].innerHTML &&
      gameBoard[4].innerHTML === gameBoard[8].innerHTML
    ) {
      return gameBoard[0].innerHTML;
    }

    if (
      gameBoard[1].innerHTML === gameBoard[4].innerHTML &&
      gameBoard[4].innerHTML === gameBoard[7].innerHTML
    ) {
      return gameBoard[1].innerHTML;
    }
  };
})();
