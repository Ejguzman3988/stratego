import { v4 as uuid } from "uuid";
import Game from "../Game";
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

    game: Game
  ) {
    this.id = uuid();
    this.name = name;
    this.color = color;
    this.details = details;
    this.rank = rank;
    this.movable = movable;
    this.movableSquares = [];
    this.game = game;
    this.square = null;
  }

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
    // down
    coord.x &&
      coord.y &&
      coord.y + 1 < 10 &&
      movableSquares.push([coord.x, coord.y + 1]);
    //right
    coord.x &&
      coord.y &&
      coord.x + 1 < 10 &&
      movableSquares.push([coord.x + 1, coord.y]);
    //up
    coord.x &&
      coord.y &&
      coord.y - 1 > 0 &&
      movableSquares.push([coord.x, coord.y - 1]);
    this.movableSquares = movableSquares;
  };

  gotCaptured() {
    // This piece has gotten captured
  }
}
