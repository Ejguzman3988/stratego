import React from "react";
import { globalGame as game } from "../../../models/Game";

import styles from "./Board.module.css";
import SquareUI from "./SquareUI";

const BoardUI = () => {
  return (
    <div className={styles.board}>
      {game.board.cells.map((row, col) =>
        row.map((cell, row) => (
          <SquareUI key={row} mapCoord={[row + 1, col + 1]} square={cell} />
        ))
      )}
    </div>
  );
};

export default BoardUI;
