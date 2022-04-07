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

  const handlePieceClick = (piece: StrategoPiece) => {
    //piece.getMovableSquares().forEach();
  };

  return (
    <div className={styles.board}>
      {rows.map((row) => row.map((cell) => <SquareUI square={cell} />))}
    </div>
  );
};

export default BoardUI;
