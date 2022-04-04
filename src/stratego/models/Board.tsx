import Square from "./Square";
import StrategoPiece from "./Pieces/StrategoPiece";
import { rules } from "../assets/rules";

export default class Board {
  cells: Square[][];
  red_pieces: StrategoPiece[];
  blue_pieces: StrategoPiece[];
  red_captures: StrategoPiece[];
  blue_captures: StrategoPiece[];

  constructor() {
    this.cells = new Array(10).fill(Array(10).fill(""));

    this.red_pieces = [];
    this.blue_pieces = [];
    this.red_captures = [];
    this.blue_captures = [];
  }

  createPieces() {
    const pieces = rules.pieces;
  }
}
