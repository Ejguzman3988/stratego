import React, { CSSProperties } from "react";
import styles from "./Piece.module.css";
import StrategoPiece from "../../../models/Pieces/StrategoPiece";
import Game from "../../../models/Game";

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
      onClick={() => piece?.handlePieceClick()}
    >
      {/* <span style={{ border: `5px var(--${piece?.color}-piece) outset` }}> */}
      <span>
        {(piece && !piece.isPlayerPiece() && !piece.captured) ||
          (piece?.rank ? piece.rank : piece?.name === "Flag" ? "F" : "B")}
        {/* {piece && <img src={piece.image} alt={piece.name} />} */}
      </span>
    </div>
  );
};

export default PieceUI;
