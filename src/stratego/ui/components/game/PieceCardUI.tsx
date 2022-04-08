import React from "react";
import StrategoPiece from "../../../models/Pieces/StrategoPiece";

const PieceCardUI = ({ piece }: { piece: StrategoPiece | null }) => {
  return (
    <div>
      <h1>{piece?.name}</h1>
      <p>{piece?.details}</p>
    </div>
  );
};

export default PieceCardUI;
