import Square from "./Square";
import { rules } from "../assets/rules";
import Game from "./Game";
import General from "./Pieces/General";
import Marshal from "./Pieces/Marshal";
import Colonel from "./Pieces/Colonel";
import Major from "./Pieces/Major";
import Captain from "./Pieces/Captain";
import Lieutenant from "./Pieces/Lieutenant";
import Sergeant from "./Pieces/Sergeant";
import Miner from "./Pieces/Miner";
import Scout from "./Pieces/Scout";
import Spy from "./Pieces/Spy";
import Bomb from "./Pieces/Bomb";
import Flag from "./Pieces/Flag";
import StrategoPiece from "./Pieces/StrategoPiece";

export default class Board {
  cells: Square[][];
  player_pieces: StrategoPiece[];
  opponent_pieces: StrategoPiece[];
  red_captures: void[];
  blue_captures: void[];
  game: Game;

  constructor(game: Game) {
    this.game = game;
    this.player_pieces = this.createPieces(game.playerRed, game);
    this.opponent_pieces = this.createPieces(!game.playerRed, game);
    this.cells = [];
    this.red_captures = [];
    this.blue_captures = [];
  }

  createPieces(player: boolean, game: Game) {
    const pieces: Array<{ name: string; quantity: number }> =
      rules.rules.pieces;
    const allPieces: any[] = [];

    const mapPieces = (cls: any, quantity: number) => {
      const piecesArr: any[] = [];

      for (let i = 0; i < quantity; i++) {
        const color = player ? "red" : "blue";
        piecesArr.push(new cls(color, 0, 0, game));
      }

      return piecesArr;
    };

    pieces.forEach((piece: { name: string; quantity: number }) => {
      switch (piece.name) {
        case "General":
          allPieces.push(...mapPieces(General, piece.quantity));
          break;

        case "Marshal":
          allPieces.push(...mapPieces(Marshal, piece.quantity));
          break;

        case "Colonel":
          allPieces.push(...mapPieces(Colonel, piece.quantity));
          break;

        case "Major":
          allPieces.push(...mapPieces(Major, piece.quantity));
          break;

        case "Captain":
          allPieces.push(...mapPieces(Captain, piece.quantity));
          break;

        case "Lieutenant":
          allPieces.push(...mapPieces(Lieutenant, piece.quantity));
          break;

        case "Sergeant":
          allPieces.push(...mapPieces(Sergeant, piece.quantity));
          break;

        case "Miner":
          allPieces.push(...mapPieces(Miner, piece.quantity));
          break;

        case "Scout":
          allPieces.push(...mapPieces(Scout, piece.quantity));
          break;

        case "Spy":
          allPieces.push(...mapPieces(Spy, piece.quantity));
          break;

        case "Bomb":
          allPieces.push(...mapPieces(Bomb, piece.quantity));
          break;

        case "Flag":
          allPieces.push(...mapPieces(Flag, piece.quantity));
          break;

        default:
          break;
      }
    });
    return allPieces;
  }

  createCells = (game: Game) => {
    const allPieces = this.opponent_pieces.reverse().concat(this.player_pieces);
    const finalBoard: any[][] = new Array(10).fill(null).map(function () {
      return new Array(10).fill(new Square());
    });
    for (let i = 0; i < allPieces.length; i++) {
      let piece: StrategoPiece = allPieces[i];
      const playerColor = game.playerRed ? "red" : "blue";
      const x = (i % 10) + 1;
      const y =
        playerColor === piece.color
          ? Math.floor(i / 10) + 3
          : Math.floor(i / 10) + 1;

      finalBoard[y - 1][x - 1] = new Square(x, y, piece);
    }
    console.log(finalBoard);
    this.cells = finalBoard;
    return finalBoard;
  };
}
