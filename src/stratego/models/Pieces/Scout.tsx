import StrategoPiece from "./StrategoPiece";

export default class Scout extends StrategoPiece {
  constructor(color: string, properties: string) {
    super("Scout", color, properties);
  }

  walkableSpaces() {
    // This will determine that the scout can move unlimited amounts.
  }
}
