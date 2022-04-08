import React, { useEffect, useState } from "react";
import Game from "../../../models/Game";
import Flag from "../../../models/Pieces/Flag";
import StrategoPiece from "../../../models/Pieces/StrategoPiece";
import Square from "../../../models/Square";

import styles from "./Board.module.css";
import SquareUI from "./SquareUI";

const BoardUI = ({
  game,
  selectedPiece,
  handleSelectedPiece,
}: {
  game: Game | null;
  selectedPiece: StrategoPiece | null;
  handleSelectedPiece: (piece: StrategoPiece) => void;
}) => {
  const [rows, setRows] = useState<any[][]>([[]]);

  useEffect(() => {
    const board = game?.board.cells;
    board && setRows(board);
    console.log(game?.selectedPiece);
  }, [game]);
  console.log(game?.selectedPiece);
  const handlePieceClick = (piece: StrategoPiece | null) => {
    if (!piece) return;
    handleSelectedPiece(piece);
    const pieceCoord = [piece.square?.x, piece.square?.y];
    game?.setSelectedPiece(piece);
    game?.setThisGame();
    for (let i = 0; i < piece.movableSquares.length; i++) {
      let coord = piece.movableSquares[i];
      const newRows = [...rows];
      const square = newRows[coord[1] - 1][coord[0] - 1];
      if (
        (!square.water && !square.piece) ||
        (square.piece && piece.color !== square.piece.color)
      )
        square.highlight = true;
      setRows(newRows);
    }
  };

  return (
    <div className={styles.board}>
      {rows.map((row, col) =>
        row.map((cell, row) => (
          <SquareUI
            key={row}
            mapCoord={[row + 1, col + 1]}
            square={cell}
            handlePieceClick={handlePieceClick}
          />
        ))
      )}
    </div>
  );
};

export default BoardUI;
