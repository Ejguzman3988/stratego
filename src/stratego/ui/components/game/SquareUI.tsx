import { observer } from "mobx-react-lite";
import React, { CSSProperties } from "react";
import StrategoPiece from "../../../models/Pieces/StrategoPiece";
import Square from "../../../models/Square";
import styles from "./Board.module.css";
import PieceUI from "./PieceUI";

export interface MyCustomCSS extends CSSProperties {
  "--selected-color": string;
}

type SquareProps = {
  mapCoord: number[];
  square: Square;
};

const SquareUI = ({ mapCoord, square }: SquareProps) => {
  const cssClassName = () => {
    if (square.highlight) return styles.squareHighlighted;
    if (square.piece && square.piece.id === square.board.game.selectedPiece?.id)
      return styles.squareSelected;
    return styles.square;
  };

  return (
    <div className={cssClassName()} onClick={() => square.handleClick()}>
      {square.piece ? <PieceUI piece={square.piece} /> : null}
    </div>
  );
};

export default observer(SquareUI);
