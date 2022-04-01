import StrategoPiece from "./StrategoPiece";

export default class Captain extends StrategoPiece {
  constructor(color: string, properties: string) {
    super("Captain", color, properties);
  }
}
