import StrategoPiece from "./StrategoPiece";

export default class Lieutenant extends StrategoPiece {
  constructor(color: string, properties: string) {
    super("Lieutenant", color, properties);
  }
}
