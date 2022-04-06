import Game from "../Game";
import StrategoPiece from "./StrategoPiece";
import { rules } from "../../assets/rules";

const pieces = rules.pieces;

const piece = pieces.sergeant;
export default class Sergeant extends StrategoPiece {
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
}
