import Game from "../Game";
import StrategoPiece from "./StrategoPiece";
import { rules } from "../../assets/rules";

const pieces = rules.pieces;
const piece = pieces.marshal;

export default class Marshal extends StrategoPiece {
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
}
