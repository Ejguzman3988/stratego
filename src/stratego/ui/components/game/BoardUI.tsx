import React, { useEffect, useState } from "react";
import Game from "../../../models/Game";
import Flag from "../../../models/Pieces/Flag";
import StrategoPiece from "../../../models/Pieces/StrategoPiece";
import Square from "../../../models/Square";

import styles from "./Board.module.css";
import SquareUI from "./SquareUI";

const BoardUI = ({ game }: { game: Game }) => {
  const [rows, setRows] = useState<any[][]>([[]]);

  useEffect(() => {
    const board = game.board.cells;
    setRows(board);
  }, []);

  const handlePieceClick = (piece: StrategoPiece | null) => {
    if (!piece) return;
    const pieceCoord = [piece.square?.x, piece.square?.y];
    console.log(pieceCoord);
    for (let i = 0; i < piece.movableSquares.length; i++) {
      let coord = piece.movableSquares[i];
      const newRows = [...rows];
      const square = newRows[coord[0] - 1][coord[1] - 1];
      if (!square.piece) square.highlight = true;
      setRows(newRows);
    }
  };

  return (
    <div className={styles.board}>
      {rows.map((row) =>
        row.map((cell) => (
          <SquareUI square={cell} handlePieceClick={handlePieceClick} />
        ))
      )}
    </div>
  );
};

export default BoardUI;
