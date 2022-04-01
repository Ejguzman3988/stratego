import StrategoPiece from "./StrategoPiece";

export default class Flag extends StrategoPiece {
  constructor(color: string, properties: string) {
    super("Flag", color, properties);
  }
}
