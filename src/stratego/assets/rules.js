import Flag from "./Images/Flag.svg";
import Bomb from "./Images/Bomb.svg";
import Spy from "./Images/Spy.svg";
import Scout from "./Images/Scout.svg";
import Defuser from "./Images/Defuser.svg";
import Sergeant from "./Images/Sergeant.svg";
import Lieutenant from "./Images/Lieutenant.svg";
import Captain from "./Images/Captain.svg";
import Colonel from "./Images/Colonel.svg";
import Major from "./Images/Major.svg";
import General from "./Images/General.svg";
import Marshal from "./Images/Marshal.svg";

export const rules = {
  pieces: {
    flag: {
      name: "Flag",
      details:
        "You win the game by capturing the enemy's flag or when your opponent is not able to move any of their playing pieces.",
      rank: null,
      quantity: 1,
      movable: false,
      image: Flag,
    },
    bomb: {
      name: "Bomb",
      details:
        "Any piece that attacks the bomb is lost. The Miner (3) is the exception to this rule",
      rank: null,
      quantity: 6,
      movable: false,
      image: Bomb,
    },
    spy: {
      name: "Spy",
      details:
        "If the Spy (1) attacks the Marshal (10), she wins. If she is attacked, she loses to any rank, including the Marshal.",
      rank: 1,
      quantity: 1,
      movable: true,
      image: Spy,
    },
    scout: {
      name: "Scout",
      details:
        "Only a Scout (2) can move or attack in straight lines over an unlimited number of empty spaces.",
      rank: 2,
      quantity: 8,
      movable: true,
      image: Scout,
    },
    miner: {
      name: "Miner",
      details: "Only a Miner (3) can defeat a bomb.",
      rank: 3,
      quantity: 5,
      movable: true,
      image: Defuser,
    },
    sergeant: {
      name: "Sergeant",
      details:
        "Piece that can move one space in each non-diagonal direction of empty space.",
      rank: 4,
      quantity: 4,
      movable: true,
      image: Sergeant,
    },
    lieutenant: {
      name: "Lieutenant",
      details:
        "Piece that can move one space in each non-diagonal direction of empty space.",
      rank: 5,
      quantity: 4,
      movable: true,
      image: Lieutenant,
    },
    captain: {
      name: "Captain",
      details:
        "Piece that can move one space in each non-diagonal direction of empty space.",
      rank: 6,
      quantity: 4,
      movable: true,
      image: Captain,
    },
    major: {
      name: "Major",
      details:
        "Piece that can move one space in each non-diagonal direction of empty space.",
      rank: 7,
      quantity: 3,
      movable: true,
      image: Major,
    },
    colonel: {
      name: "Colonel",
      details:
        "Piece that can move one space in each non-diagonal direction of empty space.",
      rank: 8,
      quantity: 2,
      movable: true,
      image: Colonel,
    },
    general: {
      name: "General",
      details:
        "Piece that can move one space in each non-diagonal direction of empty space.",
      rank: 9,
      quantity: 1,
      movable: true,
      image: General,
    },
    marshal: {
      name: "Marshal",
      details:
        "Piece that can move one space in each non-diagonal direction of empty space.",
      rank: 10,
      quantity: 1,
      movable: true,
      image: Marshal,
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
    pieces: [
      { name: "Marshal", quantity: 1 },
      { name: "General", quantity: 1 },
      { name: "Colonel", quantity: 2 },
      { name: "Major", quantity: 3 },
      { name: "Captain", quantity: 4 },
      { name: "Lieutenant", quantity: 4 },
      { name: "Sergeant", quantity: 4 },
      { name: "Miner", quantity: 5 },
      { name: "Scout", quantity: 8 },
      { name: "Spy", quantity: 1 },
      { name: "Bomb", quantity: 6 },
      { name: "Flag", quantity: 1 },
    ],
  },
};
