import React from "react";
import Board from "./Board";
import styles from "./Board.module.css";

const Game = () => {
  return (
    <div className={styles.container}>
      <h2>Game</h2>
      <Board />
    </div>
  );
};

export default Game;
