import Game from "../Game";
import StrategoPiece from "./StrategoPiece";
import { rules } from "../../assets/rules";

const pieces = rules.pieces;

const piece = pieces.scout;

export default class Scout extends StrategoPiece {
  constructor(color: string) {
    super(
      piece.name,
      color,
      piece.details,
      piece.rank,
      piece.movable,
      piece.image
    );
  }

  setMovableSquares = () => {
    this.movableSquares = [];
    const movableSquares: number[][] = [];
    let coord = {
      x: this.square ? this.square.x : 0,
      y: this.square ? this.square.y : 0,
    };

    let left = coord.x;
    let right = coord.x;
    let up = coord.y;
    let down = coord.y;
    //left

    while (left > 0) {
      movableSquares.push([--left, coord.y]);
    }
    // down
    while (down < 10) {
      movableSquares.push([coord.x, ++down]);
    }
    //right
    while (right <= 10) {
      movableSquares.push([++right, coord.y]);
    }
    //up
    while (up > 0) {
      movableSquares.push([coord.x, --up]);
    }
    this.movableSquares = movableSquares;
  };

  movePiece = () => {
    this.setMovableSquares();
  };
}
