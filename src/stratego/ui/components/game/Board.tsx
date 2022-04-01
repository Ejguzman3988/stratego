import React from "react";
import StrategoPiece from "../../../models/Pieces/StrategoPiece";

import styles from "./Board.module.css";
import Square from "./Square";

const Board = () => {
  return (
    <div className={styles.board}>
      {new Array(100).fill("").map((s, idx) => (
        <Square
          t={idx}
          piece={new StrategoPiece("King", "red", "Descriptions")}
        />
      ))}
    </div>
  );
};

export default Board;
