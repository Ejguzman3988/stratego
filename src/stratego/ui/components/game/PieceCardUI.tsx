import React from "react";
import StrategoPiece from "../../../models/Pieces/StrategoPiece";

const PieceCardUI = ({ piece }: { piece?: StrategoPiece }) => {
  return (
    <div>
      {piece && (
        <>
          <h1>{piece.name}</h1>
          <p>{piece.details}</p>
          <img alt={piece.name} src={piece.image} />
        </>
      )}
    </div>
  );
};

export default PieceCardUI;
