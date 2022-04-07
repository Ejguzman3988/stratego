import StrategoPiece from "./Pieces/StrategoPiece";

export default class Square {
  x?: number;
  y?: number;
  piece?: StrategoPiece;
  highlight: boolean;

  constructor(x?: number, y?: number, piece?: StrategoPiece) {
    this.x = x;
    this.y = y;
    this.highlight = false;
    this.piece = piece;
    if (this.piece) {
      this.piece.square = this;
    }
  }
}
