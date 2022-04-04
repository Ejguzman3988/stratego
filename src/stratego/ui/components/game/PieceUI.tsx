import React, { CSSProperties } from "react";
import styles from "./Piece.module.css";
import StrategoPiece from "../../../models/Pieces/StrategoPiece";

export interface MyCustomCSS extends CSSProperties {
  "--piece-color": string;
}

const PieceUI = ({ piece }: { piece: StrategoPiece | null }) => {
  return (
    <div
      className={styles.piece}
      style={
        {
          "--piece-color": piece?.color,
        } as MyCustomCSS
      }
    >
      <span>
        {piece
          ? piece.rank
            ? piece.rank
            : piece.name === "Flag"
            ? "F"
            : "B"
          : null}
      </span>
    </div>
  );
};

export default PieceUI;
