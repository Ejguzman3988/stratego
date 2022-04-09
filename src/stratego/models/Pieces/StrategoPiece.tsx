import { v4 as uuid } from "uuid";
import Game from "../Game";
import Square from "../Square";

export default class StrategoPiece {
  id: string;
  name: string;
  color: string;
  details: string;
  rank: number | null;
  movable: boolean;
  image: string;
  movableSquares: number[][];
  square: Square | null;

  constructor(
    name: string,
    color: string,
    details: string,
    rank: number | null,
    movable: boolean,
    image: string
  ) {
    this.id = uuid();
    this.name = name;
    this.color = color;
    this.details = details;
    this.rank = rank;
    this.movable = movable;
    this.movableSquares = [];
    this.square = null;
    this.image = image;
  }

  getSquare = () => {
    // Retrieves square a piece is on.
  };

  handlePieceClick = () => {
    this.square && this.square.board.game.setSelectedPiece(this);
    for (let i = 0; i < this.movableSquares.length; i++) {
      let coord = this.movableSquares[i];
      const square = this.square?.board.cells[coord[1] - 1][coord[0] - 1];
      if (
        (!square?.water && !square?.piece) ||
        (square.piece && this.color !== square.piece.color)
      )
        square &&
          (square.highlight = true) &&
          this.square?.board.highlightedSquares.push(square);
    }
  };

  isPlayerPiece = () =>
    this.square?.board.game.getCurrentPlayer() === this.color;

  getMovableSquares = () => {};

  setMovableSquares = () => {
    this.movableSquares = [];
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
      coord.y + 1 <= 10 &&
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

  movePiece = () => {
    this.setMovableSquares();
  };

  gotCaptured() {
    // This piece has gotten captured
  }
}
