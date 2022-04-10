import Game from "../Game";
import StrategoPiece from "./StrategoPiece";
import { rules } from "../../assets/rules";
import Square from "../Square";

const pieces = rules.pieces;
const piece = pieces.spy;

export default class Spy extends StrategoPiece {
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
  attack(target: StrategoPiece) {
    if (target.color === this.color) return;
    if (target.name === "Marshal") return target.gotCaptured();
    super.gotCaptured();
  }
}
