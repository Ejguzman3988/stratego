import { v4 as uuid } from "uuid";
import Bomb from "./Bomb";
import Flag from "./Flag";
export default class StrategoPiece {
  id: string;
  name: string;
  color: string;
  properties: string;

  constructor(name: string, color: string, properties: string) {
    this.id = uuid();
    this.name = name;
    this.color = color;
    this.properties = properties;
  }

  setSquare() {
    // Assigns the piece to a square
  }

  getSquare() {
    // Retrieves square a piece is on.
  }

  gotCaptured() {
    // This piece has gotten captured
  }

  attack(target: StrategoPiece) {
    if (target.color === this.color) return;
    if (target instanceof Flag) return; // This right should call the game master and say that we have won!
    if (target instanceof Bomb) return this.gotCaptured();

    // Logic using rank to identify which piece is captured.
    // if target is lower rank then target gotCaptured
    // if target is higher rank then this gotCaptured.
    // if draw then nothing happens.
  }
}
