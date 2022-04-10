import Game from "../Game";
import StrategoPiece from "./StrategoPiece";
import { rules } from "../../assets/rules";
import Square from "../Square";

const pieces = rules.pieces;

const piece = pieces.lieutenant;

export default class Lieutenant extends StrategoPiece {
  constructor(color: string, square: Square) {
    super(
      piece.name,
      color,
      piece.details,
      piece.rank,
      piece.movable,
      piece.image,
      square
    );
  }
}
