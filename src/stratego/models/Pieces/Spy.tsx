import StrategoPiece from "./StrategoPiece";

export default class Spy extends StrategoPiece {
  constructor(color: string, properties: string) {
    super("Spy", color, properties);
  }

  attack(target: StrategoPiece) {
    if (target.color === this.color) return;
    if (target.name === "Marshal") return target.gotCaptured();
    super.gotCaptured();
  }
}
