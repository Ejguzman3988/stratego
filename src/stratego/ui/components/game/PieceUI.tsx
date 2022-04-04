import React, { CSSProperties } from "react";
import styles from "./Piece.module.css";
import StrategoPiece from "../../../models/Pieces/StrategoPiece";

export interface MyCustomCSS extends CSSProperties {
  "--piece-color": string;
}

const PieceUI = ({ piece }: { piece: StrategoPiece }) => {
  return (
    <div
      className={styles.piece}
      style={
        {
          "--piece-color": piece.color,
        } as MyCustomCSS
      }
    ></div>
  );
};

export default PieceUI;
