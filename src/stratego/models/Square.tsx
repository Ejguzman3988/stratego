import StrategoPiece from "./StrategoPiece";

export default class Square {
  x: number;
  y: number;
  piece: StrategoPiece;
  constructor(x: number, y: number, piece: StrategoPiece) {
    this.x = x;
    this.y = y;
    this.piece = piece;
  }
}
