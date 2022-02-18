import { useEffect } from "react";
import styled from "styled-components";
import p5 from "p5";
export const Grid = () => {
  const sketch = (p) => {
    const canvas = document.getElementById("canvas");
    let canvasWidth = canvas.clientWidth;
    let canvasHeight = canvas.clientHeight;
    p.setup = () => {
      p.createCanvas(canvasWidth, canvasHeight).parent("canvas");
      p.rectMode(p.CENTER);
      p.colorMode(p.HSB, p.width, p.height, 100);
      p.noStroke();
    };
    p.draw = () => {
      let stepX = Math.abs(p.mouseX + 2);
      let stepY = Math.abs(p.mouseY + 2);
      for (let gridY = 0; gridY < p.height; gridY += stepY) {
        for (let gridX = 0; gridX < p.width; gridX += stepX) {
          p.fill(gridX, p.height - gridY, 100);
          p.rect(gridX, gridY, stepX, stepY);
        }
      }
    };
  };
  useEffect(() => {
    new p5(sketch);
  }, []);

  return (
    <Main>
      <Canvas id="canvas"></Canvas>
    </Main>
  );
};

const Main = styled.div`
  width: 100vw;
  height: 100vh;
  padding: 12px;
`;
const Canvas = styled.div`
  height: 100%;
  width: 100%;
  background-color: #eee;
`;
