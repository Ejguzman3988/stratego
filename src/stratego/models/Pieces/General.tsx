import Game from "../Game";
import StrategoPiece from "./StrategoPiece";
import { rules } from "../../assets/rules";

const pieces = rules.pieces;

const piece = pieces.general;

export default class General extends StrategoPiece {
  constructor(color: string, game: Game) {
    super(piece.name, color, piece.details, piece.rank, piece.movable, game);
  }
}
