import React, { useMemo } from "react";
import { globalGame as game } from "../../../models/Game";

import styles from "./Board.module.css";
import BoardPlayerUI from "./BoardPlayerUI";
import SquareUI from "./SquareUI";

const BoardUI = () => {
  return (
    <div className={styles.board}>
      <BoardPlayerUI player={false} turn={game.playerTurn} />
      {game.board.cells.map((row, col) =>
        row.map((cell, row) => (
          <SquareUI key={row} mapCoord={[row + 1, col + 1]} square={cell} />
        ))
      )}
      <BoardPlayerUI player={true} turn={game.playerTurn} />
    </div>
  );
};

export default BoardUI;
