import StrategoPiece from "./StrategoPiece";

export default class General extends StrategoPiece {
  constructor(color: string, properties: string) {
    super("General", color, properties);
  }
}
