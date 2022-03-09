import styled from "styled-components";
import p5 from "p5";
import { useEffect } from "react";
export const NoiseTest = () => {
  const sketch = (p) => {
    const canvas = document.getElementById("canvas");
    let canvasWidth = canvas.clientWidth;
    let canvasHeight = canvas.clientHeight;
    const baseRadius = 200;

    p.setup = () => {
      p.createCanvas(canvasWidth, canvasHeight).parent("canvas");
      p.colorMode(p.HSB, [100]);
      p.background(0, 0, 94);
      p.noFill();
      p.stroke(0, 0, 10);
      p.strokeWeight(1);
    };
    let noiseSeed = 0;

    p.draw = () => {
      p.clear();
      noiseSeed += 0.01;
      p.translate(canvasWidth / 2, canvasHeight / 2);
      for (let a = 0; a < p.TAU * 20; a += p.TAU / 720) {
        let radius = baseRadius * (p.noise(a / 2 + noiseSeed) + 0.5);
        // radius = baseRadius;
        console.log(p.noise(a / 500));
        let x = radius * p.sin(a);
        let y = radius * p.cos(a);
        p.point(x, y);
      }
    };
  };

  useEffect(() => {
    new p5(sketch);
  });

  return <Canvas id="canvas" />;
};
const Canvas = styled.div`
  height: 100vh;
  width: 100%;
  background-color: #eee;
`;
