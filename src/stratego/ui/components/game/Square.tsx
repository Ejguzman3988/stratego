import React from "react";
import styles from "./Board.module.css";

interface props {
  t: any;
}

const Square = (props: props) => {
  return <div className={styles.square}>{props.t}</div>;
};

export default Square;
