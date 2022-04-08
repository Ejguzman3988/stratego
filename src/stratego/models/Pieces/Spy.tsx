import Game from "../Game";
import StrategoPiece from "./StrategoPiece";
import { rules } from "../../assets/rules";

const pieces = rules.pieces;
const piece = pieces.spy;

export default class Spy extends StrategoPiece {
  constructor(color: string, game: Game) {
    super(
      piece.name,
      color,
      piece.details,
      piece.rank,
      piece.movable,
      piece.image,
      game
    );
  }

  attack(target: StrategoPiece) {
    if (target.color === this.color) return;
    if (target.name === "Marshal") return target.gotCaptured();
    super.gotCaptured();
  }
}
