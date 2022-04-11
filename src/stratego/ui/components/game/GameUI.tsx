import React, { useEffect, useState } from "react";
import BoardUI from "./BoardUI";
import styles from "./Board.module.css";
import Game from "../../../models/Game";
import { globalGame } from "../../../models/Game";
import StrategoPiece from "../../../models/Pieces/StrategoPiece";
import PieceCardUI from "./PieceCardUI";
import { HashLoader } from "react-spinners";
import { observer } from "mobx-react-lite";
import Captures from "./Captures";

const GameUI = () => {
  const [loading, setLoading] = useState<boolean>(true);
  useEffect(() => {
    const pictures = globalGame.board.player_pieces.map((piece) => piece.image);

    const cacheImages = (async (srcArr: string[]) => {
      const promises = await srcArr.map((src: string) => {
        return new Promise((resolve: any, reject: any) => {
          const img = new Image();

          img.src = src;
          img.onload = resolve();
          img.onerror = reject();
        });
      });
      setTimeout(() => {
        setLoading(false);
      }, 1500);
    })(pictures);
  }, []);

  return loading ? (
    <div className={styles.container}>
      <div className={styles.board} style={{ filter: "blur(5px)" }}></div>
      <span style={{ position: "absolute" }}>
        <HashLoader size={200} color="orange" />
      </span>
    </div>
  ) : (
    <div className={styles.container}>
      <h2>Game</h2>
      <BoardUI />
      <Captures color={"red"} />
      <Captures color={"blue"} />
      <PieceCardUI piece={globalGame.selectedPiece} />
    </div>
  );
};

export default observer(GameUI);
