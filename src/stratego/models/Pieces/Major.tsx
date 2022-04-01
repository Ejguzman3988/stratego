import StrategoPiece from "./StrategoPiece";

export default class Major extends StrategoPiece {
  constructor(color: string, properties: string) {
    super("Major", color, properties);
  }
}
