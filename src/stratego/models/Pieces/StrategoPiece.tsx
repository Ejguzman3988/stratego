import { v4 as uuid } from "uuid";
import Game from "../Game";
import Board from "../Board";
import PieceUI from "../../ui/components/game/PieceUI";
import Square from "../Square";

export default class StrategoPiece {
  id: string;
  name: string;
  color: string;
  details: string;
  game: Game;
  rank: number | null;
  movable: boolean;
  movableSquares: number[][];
  square: Square | null;

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
    this.game = game;
    this.square = null;
  }

  setSquare = (
    x: number,
    y: number,
    onSet: (arg: Square, x?: number, y?: number) => void
  ) => {
    // Assigns the piece to a square
    if (this.square) {
      const [prevX, prevY] = [this.square.x, this.square.y];
      this.square.x = x;
      this.square.y = y;
      this.game.board.cells[x][y] = this.square;
      console.log("SETTING");
      onSet(this.square, prevX, prevY);
    } else {
      return false;
    }
  };

  getSquare = () => {
    // Retrieves square a piece is on.
  };

  getMovableSquares = () => {};

  setMovableSquares = () => {
    const movableSquares: number[][] = [];
    let coord = { x: this.square?.x, y: this.square?.y };

    //left
    coord.x &&
      coord.y &&
      coord.x - 1 > 0 &&
      movableSquares.push([coord.x - 1, coord.y]);
    // up
    coord.x &&
      coord.y &&
      coord.y - 1 <= 10 &&
      movableSquares.push([coord.x, coord.y + 1]);
    //right
    coord.x &&
      coord.y &&
      coord.x <= 10 &&
      movableSquares.push([coord.x + 1, coord.y]);
    //down
    coord.x &&
      coord.y &&
      coord.y > 0 &&
      movableSquares.push([coord.x, coord.y - 1]);

    return movableSquares;
  };

  gotCaptured() {
    // This piece has gotten captured
  }
}
