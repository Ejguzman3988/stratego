import Square from "./Square";

export default class Game {
  playerBlue: boolean;
  board: Square[];

  constructor(playerBlue: boolean, board: Square[]) {
    this.playerBlue = playerBlue;
    this.board = board;
  }

  createBoard() {
    if (this.playerBlue) {
      // if player is blue set blue to the side of player
    } else {
      // make red to the side of player
    }
  }

  movePiece(pieceId: string, coordinate: [number, number]) {
    // code to make piece move.
  }
}
