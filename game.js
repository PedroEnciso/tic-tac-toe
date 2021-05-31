const GameBoard = (() => {
  // get DOM elements
  const gameBoard = document.querySelectorAll(".space");

  let whoseTurn = true;

  for (let i = 0; i < gameBoard.length; i++) {
    gameBoard[i].addEventListener("click", () => playerTurn(gameBoard[i]));
  }

  // functions
  const playerTurn = (space) => {
    if (space.innerHTML) return;
    whoseTurn ? (space.innerHTML = "X") : (space.innerHTML = "O");
    whoseTurn = !whoseTurn;
    let winner = checkForWinner(gameBoard);
    if (winner === "X") {
      alert("Player 1 wins!");
      finishGame();
    } else if (winner === "O") {
      alert("Player 2 wins!");
      finishGame();
    } else if (winner === "draw") {
      alert("Tie game.");
      finishGame();
    }
  };

  const checkForWinner = (gameBoard) => {
    if (checkRows()) return checkRows();
    if (checkCols()) return checkCols();
    if (checkDiagonals()) return checkDiagonals();
    if (checkDraw()) return "draw";
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
      gameBoard[2].innerHTML === gameBoard[4].innerHTML &&
      gameBoard[4].innerHTML === gameBoard[6].innerHTML
    ) {
      return gameBoard[2].innerHTML;
    }
  };

  const checkDraw = () => {
    for (let i = 0; i < gameBoard.length; i++) {
      if (gameBoard[i].innerHTML === "") {
        return false;
      }
    }
    return true;
  };

  const finishGame = () => {
    for (let i = 0; i < gameBoard.length; i++) {
      gameBoard[i].innerHTML = "";
    }
    whoseTurn = true;
  };
})();
