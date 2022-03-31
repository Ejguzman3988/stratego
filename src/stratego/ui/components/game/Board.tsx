import React from "react";

import styles from "./Board.module.css";
import Square from "./Square";

const Board = () => {
  return (
    <div className={styles.board}>
      {new Array(100).fill("").map((s, idx) => (
        <Square t={idx} />
      ))}
    </div>
  );
};

export default Board;
