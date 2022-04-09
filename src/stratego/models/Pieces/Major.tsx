import Game from "../Game";
import StrategoPiece from "./StrategoPiece";
import { rules } from "../../assets/rules";

const pieces = rules.pieces;

const piece = pieces.major;

export default class Major extends StrategoPiece {
  constructor(color: string) {
    super(
      piece.name,
      color,
      piece.details,
      piece.rank,
      piece.movable,
      piece.image
    );
  }
}
