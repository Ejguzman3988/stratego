import Game from "../Game";
import StrategoPiece from "./StrategoPiece";
import { rules } from "../../assets/rules";
import Square from "../Square";

const pieces = rules.pieces;

const piece = pieces.miner;

export default class Miner extends StrategoPiece {
  constructor(color: "red" | "blue", square: Square) {
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
    if (target.name === "Bomb") return target.gotCaptured();
    this.square?.board.game.attack(this, target);
  }
}
