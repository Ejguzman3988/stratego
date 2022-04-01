import StrategoPiece from "./StrategoPiece";

export default class Bomber extends StrategoPiece {
  constructor(color: string, properties: string) {
    super("Bomber", color, properties);
  }

  attack(target: StrategoPiece) {
    if (target.color === this.color) return;
    if (target.name === "Bomb") return target.gotCaptured();
    super.attack(target);
  }
}
