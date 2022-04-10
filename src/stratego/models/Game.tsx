import Board from "./Board";
import { v4 as uuid } from "uuid";
import StrategoPiece from "./Pieces/StrategoPiece";
import { action, computed, makeObservable, observable } from "mobx";

export default class Game {
  uuid: string;
  playerRed: boolean;
  board: Board;
  selectedPiece?: StrategoPiece;
  playerTurn: boolean;
  started: boolean;

  constructor(playerRed: boolean) {
    makeObservable(this, {
      board: observable,
      playerRed: observable,
      selectedPiece: observable,
      getSelectedPiece: computed,
      setSelectedPiece: action,
      unSelectPiece: action,
    });

    this.uuid = uuid();
    this.playerRed = playerRed;
    this.playerTurn = playerRed ? true : false;
    this.board = new Board(this);
    this.board.createCells(this);
    this.started = false;
  }

  get getSelectedPiece() {
    return this.selectedPiece;
  }

  setSelectedPiece = (piece: StrategoPiece) => {
    const prevSelected = this.selectedPiece;
    this.unSelectPiece();
    prevSelected !== piece && (this.selectedPiece = piece);
  };

  unSelectPiece = () => {
    this.board.highlightedSquares.forEach(
      (square) => (square.highlight = false)
    );
    this.selectedPiece = undefined;
  };

  getCurrentPlayer = () => {
    return this.playerRed ? "red" : "blue";
  };

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

  changeTurn = () => {
    if (!this.started) this.started = true;
    this.playerTurn = !this.playerTurn;
  };

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

export const globalGame = new Game(true);
