import Board from "./Board";
import StrategoPiece from "./Pieces/StrategoPiece";

export default class Square {
  x?: number;
  y?: number;
  piece?: StrategoPiece;
  highlight: boolean;
  board: Board;
  water: boolean;

  constructor(board: Board, x?: number, y?: number, piece?: StrategoPiece) {
    this.x = x;
    this.y = y;
    this.highlight = false;
    this.piece = piece;
    this.board = board;
    this.piece && (this.piece.square = this);
    this.water = false;
  }

  setSquare = () => {};
}
