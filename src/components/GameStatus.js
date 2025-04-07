import React from "react";

const GameStatus = ({ winner, resetGame }) => {
  const showOverlay = winner !== null;

  const getWinnerText = () => {
    if (winner === "X") return "Player 1 Wins!";
    if (winner === "O") return "Player 2 Wins!";
    if (winner === "Draw") return "It's a Draw!";
    return "";
  };

  return (
    <>
      <div className="player-labels">
        <span>Player 1: X</span>
        <span>Player 2: O</span>
      </div>

      {showOverlay && (
        <div className="overlay">
          <div className="overlay-content">
            <div className={`winner-icon ${winner}`}>
              {winner !== "Draw" && winner}
            </div>
            <h2>{getWinnerText()}</h2>
            <button className="reset-button" onClick={resetGame}>
              Play Again
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default GameStatus;
