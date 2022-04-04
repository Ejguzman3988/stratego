import React from "react";
import StrategoPiece from "../../../models/Pieces/StrategoPiece";
import styles from "./Board.module.css";
import PieceUI from "./PieceUI";

const SquareUI = ({ piece }: { piece: StrategoPiece | null }) => {
  return (
    <div className={styles.square}>
      <PieceUI piece={piece} />
    </div>
  );
};

export default SquareUI;
