import React, { useEffect, useRef } from "react";
import styles from "./Canvas.module.css";

const Canvas = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) {
      return;
    }

    const context = canvas.getContext("2d");

    if (!context) {
      return;
    }
    context.fillStyle = "blue";
    context.fillRect(0, 0, 100, 100);
  }, []);

  return (
    <div className={styles.container}>
      <canvas ref={canvasRef} className={styles.canvas} />;
    </div>
  );
};

export default Canvas;
