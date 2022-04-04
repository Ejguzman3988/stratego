import Board from "./Board";
import { v4 as uuid } from "uuid";

export default class Game {
  uuid: string;
  playerRed: boolean;
  board: Board;

  constructor(playerRed: boolean) {
    this.uuid = uuid();
    this.playerRed = playerRed;
    this.board = new Board(this);
  }

  createBoard() {
    if (this.playerRed) {
      // if player is blue set blue to the side of player
    } else {
      // make red to the side of player
    }
  }

  movePiece(pieceId: string, coordinate: [number, number]) {
    // code to make piece move.
  }

  attack(current: any, target: any) {
    if (target.color === current.color) return;
    if (target.name === "Flag") return; // current right should call the game master and say that we have won!
    if (target.name === "Bomb") return current.gotCaptured();
    // Logic using rank to identify which piece is captured.
    // if target is lower rank then target gotCaptured
    // if target is higher rank then this gotCaptured.
    // if draw then nothing happens.
  }
}
