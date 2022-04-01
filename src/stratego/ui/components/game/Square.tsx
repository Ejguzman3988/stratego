import React from "react";
import StrategoPiece from "../../../models/Pieces/StrategoPiece";
import styles from "./Board.module.css";
import Piece from "./Piece";

const Square = ({ t, piece }: { t: any; piece: StrategoPiece }) => {
  return (
    <div className={styles.square}>
      <Piece piece={piece} />
    </div>
  );
};

export default Square;
