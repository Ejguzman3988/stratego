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
      <span style={{ border: `5px var(--${piece?.color}-piece) outset` }}>
        {piece && <img src={piece.image} alt={piece.name} />}
      </span>
    </div>
  );
};

export default PieceUI;
