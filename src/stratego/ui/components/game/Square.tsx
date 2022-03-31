import React from "react";

interface props {
  t: any;
}

const Square = (props: props) => {
  return (
    <div
      style={{
        border: "0.5px black inset",
        width: "calc(100vw/10 - 2px)",
        height: "calc(100vw/10 - 2px)",
        margin: "0",
        display: "grid",
        alignItems: "center",
      }}
    >
      {props.t}
    </div>
  );
};

export default Square;
