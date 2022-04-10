import Game from "../Game";
import StrategoPiece from "./StrategoPiece";
import { rules } from "../../assets/rules";
import Square from "../Square";

const pieces = rules.pieces;

const piece = pieces.scout;

export default class Scout extends StrategoPiece {
  constructor(color: string, square: Square) {
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

  setMovableSquares = () => {
    this.movableSquares = [];
    const movableSquares: number[][] = [];
    let coord = {
      x: this.square ? this.square.x : 0,
      y: this.square ? this.square.y : 0,
    };

    let left = { coord: coord.x, blocked: false };
    let right = { coord: coord.x, blocked: false };
    let up = { coord: coord.y, blocked: false };
    let down = { coord: coord.y, blocked: false };
    //left
    let square;

    while (!left.blocked && left.coord > 1) {
      const moveLeft = [--left.coord, coord.y];
      square = this.square.board.findSquare(moveLeft);
      if (square && square.water) left.blocked = true;
      if (square && square.piece) left.blocked = true;
      movableSquares.push(moveLeft);
    }
    // down
    while (!down.blocked && down.coord < 10) {
      const moveDown = [coord.x, ++down.coord];
      square = this.square.board.findSquare(moveDown);
      if (square && square.water) {
        down.blocked = true;
      } else if (square && square.piece) {
        down.blocked = true;
      } else {
        movableSquares.push(moveDown);
      }
    }
    //right
    while (!right.blocked && right.coord <= 10) {
      const moveRight = [++right.coord, coord.y];
      square = this.square.board.findSquare(moveRight);
      if (square && square.water) right.blocked = true;
      if (square && square.piece) right.blocked = true;
      movableSquares.push(moveRight);
    }
    //up
    while (!up.blocked && up.coord > 1) {
      const moveUp = [coord.x, --up.coord];
      square = this.square.board.findSquare(moveUp);
      if (square.water) up.blocked = true;
      if (square.piece) up.blocked = true;
      movableSquares.push(moveUp);
    }
    this.movableSquares = movableSquares;
  };

  movePiece = () => {
    this.setMovableSquares();
  };
}
