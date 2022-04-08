import React, { useEffect, useState } from "react";
import BoardUI from "./BoardUI";
import styles from "./Board.module.css";
import Game from "../../../models/Game";
import StrategoPiece from "../../../models/Pieces/StrategoPiece";
import PieceCardUI from "./PieceCardUI";

const GameUI = () => {
  const [game, setGame] = useState(null);
  const [selectedPiece, setSelectedPiece] = useState<StrategoPiece | null>(
    null
  );

  useEffect(() => {
    new Game(true, setGame);
  }, []);

  const handleSelectedPiece = (piece: StrategoPiece) => {
    setSelectedPiece(piece);
  };

  return (
    <div className={styles.container}>
      <h2>Game</h2>
      <BoardUI
        game={game}
        selectedPiece={selectedPiece}
        handleSelectedPiece={handleSelectedPiece}
      />
      <PieceCardUI piece={selectedPiece} />
    </div>
  );
};

export default GameUI;
