import React from "react";
import StrategoPiece from "../../../models/Pieces/StrategoPiece";
import Square from "../../../models/Square";
import styles from "./Board.module.css";
import PieceUI from "./PieceUI";

const SquareUI = ({
  mapCoord,
  square,
  handlePieceClick,
}: {
  mapCoord: number[];
  square: Square;
  handlePieceClick: (piece: StrategoPiece | null) => void;
}) => {
  return (
    <div
      className={styles.square}
      style={
        square.highlight ? { background: "green", filter: "blur(1px)" } : {}
      }
    >
      {square.piece ? (
        <PieceUI piece={square.piece} handlePieceClick={handlePieceClick} />
      ) : null}
    </div>
  );
};

export default SquareUI;
