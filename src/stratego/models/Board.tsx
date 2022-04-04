import Square from "./Square";
import StrategoPiece from "./Pieces/StrategoPiece";
import { rules } from "../assets/rules";
import Game from "./Game";

export default class Board {
  cells: Square[][];
  red_pieces: void[];
  blue_pieces: void[];
  red_captures: void[];
  blue_captures: void[];
  game: Game;

  constructor(game: Game) {
    this.game = game;
    this.cells = new Array(10).fill(Array(10).fill(""));
    this.red_pieces = this.createPieces("red", game);
    this.blue_pieces = this.createPieces("blue", game);
    this.red_captures = [];
    this.blue_captures = [];
  }

  createPieces(color: string, game: Game) {
    const pieces = rules.rules.pieces;
    return pieces.map((piece: { name: string; quantity: number }) => {
      for (let i = 0; i < piece.quantity; i++) {
        new (eval(piece.name))(color, game);
      }
    });
  }
}
