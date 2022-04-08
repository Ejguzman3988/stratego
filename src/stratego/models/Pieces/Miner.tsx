import Game from "../Game";
import StrategoPiece from "./StrategoPiece";
import { rules } from "../../assets/rules";

const pieces = rules.pieces;

const piece = pieces.miner;

export default class Miner extends StrategoPiece {
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
    if (target.name === "Bomb") return target.gotCaptured();
    this.game.attack(this, target);
  }
}
