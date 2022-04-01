import StrategoPiece from "./StrategoPiece";

export default class Bomb extends StrategoPiece {
  constructor(color: string, properties: string) {
    super("Bomb", color, properties);
  }
}
