import { v4 as uuid } from "uuid";
import Game from "../Game";
import Board from "../Board";
import PieceUI from "../../ui/components/game/PieceUI";

export default class StrategoPiece {
  id: string;
  name: string;
  color: string;
  details: string;
  game: Game;
  rank: number | null;
  movable: boolean;
  x: number;
  y: number;

  constructor(
    name: string,
    color: string,
    details: string,
    rank: number | null,
    movable: boolean,
    x: number,
    y: number,
    game: Game
  ) {
    this.id = uuid();
    this.name = name;
    this.color = color;
    this.details = details;
    this.rank = rank;
    this.movable = movable;
    this.x = x;
    this.y = y;
    this.game = game;
  }

  setSquare = (x: number, y: number, onSet: (arg: StrategoPiece) => void) => {
    // Assigns the piece to a square
    this.x = x;
    this.y = y;
    this.game.board.cells[--y][--x] = this;
    console.log("SETTING");
    onSet(this);
  };

  getSquare = () => {
    // Retrieves square a piece is on.
  };

  gotCaptured() {
    // This piece has gotten captured
  }
}
