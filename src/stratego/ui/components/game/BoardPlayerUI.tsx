import React from "react";
import { globalGame } from "../../../models/Game";
import styles from "./Board.module.css";

const BoardPlayerUI = ({
  player,
  turn,
}: {
  player: boolean;
  turn: boolean;
}) => {
  const stylesCreator = () => {
    const className = [];
    player
      ? className.push(styles.boardPlayer)
      : className.push(styles.boardOpponent);
    player
      ? turn && globalGame.started && className.push(styles.boardActive)
      : !turn && globalGame.started && className.push(styles.boardActive);
    return className.join(" ");
  };

  return (
    <div className={stylesCreator()}>
      <span>{player ? "Player 1" : "Player 2"}</span>
      <span>00:00</span>
    </div>
  );
};

export default BoardPlayerUI;
