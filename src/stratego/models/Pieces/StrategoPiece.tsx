import { v4 as uuid } from "uuid";
import Game from "../Game";
import Square from "../Square";
import Flag from "./Flag";

export default class StrategoPiece {
  id: string;
  name: string;
  color: "red" | "blue";
  details: string;
  rank: number | null;
  movable: boolean;
  image: string;
  movableSquares: number[][];
  square: Square;

  constructor(
    name: string,
    color: "red" | "blue",
    details: string,
    rank: number | null,
    movable: boolean,
    image: string,
    square: Square
  ) {
    this.id = uuid();
    this.name = name;
    this.color = color;
    this.details = details;
    this.rank = rank;
    this.movable = movable;
    this.movableSquares = [];
    this.image = image;
    this.square = square;
  }

  getSquare = () => {
    // Retrieves square a piece is on.
  };

  handlePieceClick = () => {
    // const game = this.square.board.game;

    // if (!game.playerTurn) return;
    // if (!(game.getCurrentPlayer() === this.color)) return;
    if (this.checkAttack()) return;
    this.square && this.square.board.game.setSelectedPiece(this);
    this.setMovableSquares();
    for (let i = 0; i < this.movableSquares.length; i++) {
      let coord = this.movableSquares[i];
      const square = this.square?.board.cells[coord[1] - 1][coord[0] - 1];
      if (
        (!square?.water && !square?.piece) ||
        (square.piece && this.color !== square.piece.color)
      )
        square &&
          (square.highlight = true) &&
          this.square?.board.highlightedSquares.push(square);
    }
  };

  checkAttack = () => {
    const game = this.square.board.game;
    const [selectedPiece, clickedPiece] = [game.selectedPiece, this];
    if (!selectedPiece) return false;
    if (selectedPiece === clickedPiece) return false;
    if (selectedPiece.color === clickedPiece.color) return false;
    game.activateBattle(selectedPiece, clickedPiece);
    this.compare(selectedPiece, clickedPiece);
  };

  compare = (selectedPiece: StrategoPiece, clickedPiece: StrategoPiece) => {
    // check if flag
    const game = selectedPiece.square.board.game;
    const selectedCaptures = game.board[`${selectedPiece.color}Captures`];
    const clickedCaptures = game.board[`${clickedPiece.color}Captures`];
    if (selectedPiece.rank === clickedPiece.rank) {
      return true;
    }
    if (clickedPiece.name === "Flag") alert(`${game.getCurrentPlayer()} WINS`);
    if (clickedPiece.name === "Bomb") {
      game.unSelectPiece();
      clickedCaptures.push(selectedPiece);
      return true;
    }
    if (
      selectedPiece.rank !== null &&
      clickedPiece.rank !== null &&
      selectedPiece.rank > clickedPiece.rank
    ) {
      clickedPiece.square.piece = selectedPiece;
      selectedPiece.square.piece = undefined;
      selectedPiece.square = clickedPiece.square;
      selectedCaptures.push(clickedPiece);
      return true;
    }

    if (
      selectedPiece.rank !== null &&
      clickedPiece.rank !== null &&
      selectedPiece.rank < clickedPiece.rank
    ) {
      selectedPiece.square.piece = undefined;
      clickedCaptures.push(selectedPiece);
    }

    // check if bomb
    //
  };

  isPlayerPiece = () =>
    this.square?.board.game.getCurrentPlayer() === this.color;

  getMovableSquares = () => {};

  setMovableSquares = () => {
    this.movableSquares = [];
    const movableSquares: number[][] = [];
    let coord = { x: this.square?.x, y: this.square?.y };
    //left
    coord.x &&
      coord.y &&
      coord.x - 1 > 0 &&
      movableSquares.push([coord.x - 1, coord.y]);
    // down
    coord.x &&
      coord.y &&
      coord.y + 1 <= 10 &&
      movableSquares.push([coord.x, coord.y + 1]);
    //right
    coord.x &&
      coord.y &&
      coord.x + 1 <= 10 &&
      movableSquares.push([coord.x + 1, coord.y]);
    //up
    coord.x &&
      coord.y &&
      coord.y - 1 > 0 &&
      movableSquares.push([coord.x, coord.y - 1]);
    this.movableSquares = movableSquares;
  };

  movePiece = () => {
    this.setMovableSquares();
  };

  gotCaptured() {
    // This piece has gotten captured
  }
}
