export const rules = {
  pieces: {
    flag: {
      name: "Flag",
      details:
        "You win the game by capturing the enemy's flag or when your opponent is not able to move any of their playing pieces.",
      rank: null,
      quantity: 1,
      movable: false,
    },
    bomb: {
      name: "Bomb",
      details:
        "Any piece that attacks the bomb is lost. The Miner (3) is the exception to this rule",
      rank: null,
      quantity: 6,
      movable: false,
    },
    spy: {
      name: "Spy",
      details:
        "If the Spy (1) attacks the Marshal (10), she wins. If she is attacked, she loses to any rank, including the Marshal.",
      rank: 1,
      quantity: 1,
      movable: true,
    },
    scout: {
      name: "Scout",
      details:
        "Only a Scout (2) can move or attack in straight lines over an unlimited number of empty spaces.",
      rank: 2,
      quantity: 8,
      movable: true,
    },
    miner: {
      name: "Miner",
      details: "Only a Miner (3) can defeat a bomb.",
      rank: 3,
      quantity: 5,
      movable: true,
    },
    sergeant: {
      name: "Sergeant",
      details: "",
      rank: 4,
      quantity: 4,
      movable: true,
    },
    lieutenant: {
      name: "Lieutenant",
      details: "",
      rank: 5,
      quantity: 4,
      movable: true,
    },
    captain: {
      name: "Captain",
      details: "",
      rank: 6,
      quantity: 4,
      movable: true,
    },
    major: {
      name: "Major",
      details: "",
      rank: 7,
      quantity: 3,
      movable: true,
    },
    colonel: {
      name: "Colonel",
      details: "",
      rank: 8,
      quantity: 2,
      movable: true,
    },
    general: {
      name: "General",
      details: "",
      rank: 9,
      quantity: 1,
      movable: true,
    },
    marshall: {
      name: "Marshal",
      details: "",
      rank: 10,
      quantity: 1,
      movable: true,
    },
  },
  rules: {
    "Quick Start Guide":
      "Place the screen in the centre of the game board. Secretly deploy your army by placing the 40 playing pieces on the first four rows of the game board. Red begins. Taking turns, each player has to either move one of their own playing pieces, or attack one of their enemy's playing pieces.",
    Movement: [
      "Move one of your playing pieces one space forwards, backwards, to the left or to the right. Scouts (2) are an exception to this rule.",
      "Two pieces can never occupy the same space on the game board.",
      "A piece can never be moved diagonally. Also it cannot move across the water on the middle of the game board or jump over another playing piece.",
      "The flag and bombs may never be moved.",
      "You may not move a piece back and forth between the same two spaces more than three times.",
      "You may also not continuously pursue one of your opponent's playing pieces without making an attack. If this happens the aggressor must stop this at once.",
      "If you made a move and have let go of your piece, you can't retract the move.",
    ],
    Attacking: [
      "Take your piece and tap an enemy's piece that is directly in front of, behind, to the left or to the right of you. Both players reveal their ranks.",
      "The piece that holds the lowest rank loses, and is removed from the board. The Spy (1) is ann exception to this rule.",
      "If both pieces hold the same rank, both pieces are removed from the board.",
      "If the attacking piece wins, it takes the position of the losing piece.",
      "If the defending piece wins it remains where it is.",
    ],
  },
};
