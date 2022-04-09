import { makeAutoObservable } from "mobx";
import Game from "../models/Game";
import Square from "../models/Square";

class Store {
  game: Game | null = null;
  cells: Square[][] = [];

  constructor() {
    makeAutoObservable(this);
  }
}

const store = new Store();
export default store;
