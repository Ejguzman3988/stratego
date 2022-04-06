import Game from "../Game";
import StrategoPiece from "./StrategoPiece";
import { rules } from "../../assets/rules";

const pieces = rules.pieces;

const piece = pieces.scout;

export default class Scout extends StrategoPiece {
  constructor(color: string, x: number, y: number, game: Game) {
    super(
      piece.name,
      color,
      piece.details,
      piece.rank,
      piece.movable,
      x,
      y,
      game
    );
  }

  walkableSpaces() {
    // This will determine that the scout can move unlimited amounts.
  }
}
