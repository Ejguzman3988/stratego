import React from "react";
import StrategoPiece from "../../../models/Pieces/StrategoPiece";
import Square from "../../../models/Square";
import styles from "./Board.module.css";
import PieceUI from "./PieceUI";

const SquareUI = ({ square }: { square: Square }) => {
  return (
    <div
      className={styles.square}
      style={
        square.highlight ? { background: "green", filter: "blur(1px)" } : {}
      }
    >
      {square.piece ? <PieceUI piece={square.piece} /> : null}
    </div>
  );
};

export default SquareUI;
