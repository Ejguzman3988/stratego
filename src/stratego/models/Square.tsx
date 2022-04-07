import Board from "./Board";
import StrategoPiece from "./Pieces/StrategoPiece";

export default class Square {
  x?: number;
  y?: number;
  piece?: StrategoPiece;
  highlight: boolean;
  board: Board;

  constructor(board: Board, x?: number, y?: number, piece?: StrategoPiece) {
    this.x = x;
    this.y = y;
    this.highlight = false;
    this.piece = piece;
    this.board = board;
    if (this.piece) {
      this.piece.square = this;
    }
  }

  setSquare = () => {};
}
