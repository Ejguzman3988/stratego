import React, { CSSProperties } from "react";
import styles from "./Piece.module.css";
import StrategoPiece from "../../../models/StrategoPiece";

export interface MyCustomCSS extends CSSProperties {
  "--piece-color": string;
}

const Piece = ({ piece }: { piece: StrategoPiece }) => {
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

export default Piece;
