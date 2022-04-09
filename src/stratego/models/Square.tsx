import Board from "./Board";
import StrategoPiece from "./Pieces/StrategoPiece";
import { v4 as uuid } from "uuid";

export default class Square {
  uuid: string;
  x?: number;
  y?: number;
  piece?: StrategoPiece;
  highlight: boolean;
  board: Board;
  water: boolean;

  constructor(board: Board, x?: number, y?: number, piece?: StrategoPiece) {
    this.uuid = uuid();
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
