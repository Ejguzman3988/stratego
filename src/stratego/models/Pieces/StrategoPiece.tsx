import { v4 as uuid } from "uuid";
import Game from "../Game";
import Board from "../Board";
export default class StrategoPiece {
  id: string;
  name: string;
  color: string;
  details: string;
  game: Game;
  rank: number | null;
  movable: boolean;

  constructor(
    name: string,
    color: string,
    details: string,
    rank: number | null,
    movable: boolean,
    game: Game
  ) {
    this.id = uuid();
    this.name = name;
    this.color = color;
    this.details = details;
    this.rank = rank;
    this.movable = movable;
    this.game = game;
  }

  setSquare = () => {
    // Assigns the piece to a square
  };

  getSquare = () => {
    // Retrieves square a piece is on.
  };

  gotCaptured() {
    // This piece has gotten captured
  }
}
