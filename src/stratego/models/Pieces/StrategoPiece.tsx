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
  movableSquares: number[][];
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
    this.movableSquares = this.setMovableSquares();
    this.x = x;
    this.y = y;
    this.game = game;
  }

  setSquare = (
    x: number,
    y: number,
    onSet: (arg: StrategoPiece, x: number, y: number) => void
  ) => {
    // Assigns the piece to a square
    const [prevX, prevY] = [this.x, this.y];
    this.x = x;
    this.y = y;
    this.game.board.cells[x][y] = this;
    console.log("SETTING");
    onSet(this, prevX, prevY);
  };

  getSquare = () => {
    // Retrieves square a piece is on.
  };

  getMovableSquares = () => {};

  setMovableSquares = () => {
    const movableSquares: number[][] = [];

    //left
    if (this.x - 1 > 0) movableSquares.push([this.x - 1, this.y]);
    // up
    if (this.y <= 10) movableSquares.push([this.x, this.y + 1]);
    //right
    if (this.x <= 10) movableSquares.push([this.x + 1, this.y]);
    //down
    if (this.y > 0) movableSquares.push([this.x, this.y - 1]);

    return movableSquares;
  };

  gotCaptured() {
    // This piece has gotten captured
  }
}
