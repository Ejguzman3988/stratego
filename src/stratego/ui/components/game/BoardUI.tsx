import React, { useEffect, useState } from "react";
import Game from "../../../models/Game";
import Flag from "../../../models/Pieces/Flag";
import StrategoPiece from "../../../models/Pieces/StrategoPiece";

import styles from "./Board.module.css";
import SquareUI from "./SquareUI";

const BoardUI = ({ game }: { game: Game }) => {
  const [rows, setRows] = useState<any[][]>([[]]);

  useEffect(() => {
    const board = game.board.cells;
    setRows(board);
  }, []);

  const handleSetting = (newPiece: StrategoPiece) => {
    setRows((rows) => {
      let newArr = [...rows];
      newArr[newPiece.y][newPiece.x] = newPiece;
      return newArr;
    });
  };

  return (
    <div className={styles.board}>
      {rows.map((row) => row.map((cell) => <SquareUI piece={cell} />))}
      <button
        onClick={() => game.board.cells[0][0].setSquare(5, 3, handleSetting)}
      >
        Set
      </button>
    </div>
  );
};

export default BoardUI;
