import React, { useEffect, useState } from "react";
import Game from "../../../models/Game";
import StrategoPiece from "../../../models/Pieces/StrategoPiece";

import styles from "./Board.module.css";
import SquareUI from "./SquareUI";

const BoardUI = ({ game }: { game: Game }) => {
  const [rows, setRows] = useState<any[][]>([[]]);

  useEffect(() => {
    setRows(game.board.createCells(game));
  }, []);

  return (
    <div className={styles.board}>
      {rows.map((row) => row.map((cell) => <SquareUI piece={cell} />))}
    </div>
  );
};

export default BoardUI;
