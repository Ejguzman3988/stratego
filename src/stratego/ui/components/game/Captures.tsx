import React from "react";
import { globalGame } from "../../../models/Game";
import PieceUI from "./PieceUI";

const Captures = ({ color }: { color: "red" | "blue" }) => {
  return (
    <div>
      <div>{color} Captures: </div>
      <div style={{ display: "flex" }}>
        {globalGame.board[`${color}Captures`].map((piece) => (
          <PieceUI piece={piece} />
        ))}
      </div>
    </div>
  );
};

export default Captures;
