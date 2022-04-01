import { v4 as uuid } from "uuid";
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
}
