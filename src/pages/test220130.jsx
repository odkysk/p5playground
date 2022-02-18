import { useEffect } from "react";
import styled from "styled-components";
import p5 from "p5";
import { map } from "../utils.js";
export const Test220130 = () => {
  const sketch = (p) => {
    const canvas = document.getElementById("canvas");
    let canvasWidth = canvas.clientWidth;
    let canvasHeight = canvas.clientHeight;
    p.setup = () => {
      p.createCanvas(canvasWidth, canvasHeight).parent("canvas");
      p.rectMode(p.CENTER);
      p.colorMode(p.HSB, 360, 100, 100, 100);
      p.noStroke();
    };
    p.draw = () => {
      let hue = map(p.mouseX / p.width, 0, 1, 0, 360);
      let saturation = map(p.mouseY / p.height, 1, 0, 0, 100);
      p.background(hue, saturation, 100);
      console.log(`hue: ${hue} s: ${saturation}`);
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
