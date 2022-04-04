import React, { useState } from "react";
import BoardUI from "./BoardUI";
import styles from "./Board.module.css";
import Game from "../../../models/Game";

const GameUI = ({ playerRed }: { playerRed: boolean }) => {
  const [game, setGame] = useState(new Game(true));

  return (
    <div className={styles.container}>
      <h2>Game</h2>
      <BoardUI />
    </div>
  );
};

export default GameUI;
