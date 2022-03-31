class StrategoPiece {
  id: string;
  name: string;
  color: string;
  properties: Text;

  constructor(id: string, name: string, color: string, properties: Text) {
    this.id = id;
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

export {};
