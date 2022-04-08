import React, { CSSProperties } from "react";
import styles from "./Piece.module.css";
import StrategoPiece from "../../../models/Pieces/StrategoPiece";

export interface MyCustomCSS extends CSSProperties {
  "--piece-color": string;
}

const PieceUI = ({
  piece,
  handlePieceClick,
}: {
  piece: StrategoPiece | null;
  handlePieceClick: (piece: StrategoPiece | null) => void;
}) => {
  return (
    <div
      className={styles.piece}
      style={
        {
          "--piece-color": piece?.color,
        } as MyCustomCSS
      }
      onClick={() => handlePieceClick(piece)}
    >
      <span>{piece ? <img alt={piece.name} src={piece.image} /> : null}</span>
    </div>
  );
};

export default PieceUI;
