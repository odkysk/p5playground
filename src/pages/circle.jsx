import { useEffect } from "react";
import styled from "styled-components";
import p5 from "p5";
export const Circle = () => {
  let waveCount = 1;
  let waveSize = 150;
  const sketch = (p) => {
    const canvas = document.getElementById("canvas");
    console.log(canvas);
    let canvasWidth = canvas.clientWidth;
    let canvasHeight = canvas.clientHeight;
    p.setup = () => {
      p.createCanvas(canvasWidth, canvasHeight).parent("canvas");
      p.angleMode(p.DEGREES);
      p.strokeWeight(1);
      p.stroke("black");
    };
    p.draw = () => {
      p.fill(240, 240, 240, 90);
      p.rect(0, 0, canvasWidth, canvasHeight);
      p.translate(canvasWidth / 2, canvasHeight / 2);
      waveCount = (p.mouseX / canvasWidth) * 10;
      waveSize = ((-p.mouseY + canvasHeight) / canvasHeight) * 150;
      console.log(waveSize);
      for (let angle = 0; angle <= 360 * 3; angle += 1) {
        let radius = 200 + waveSize * p.sin(angle * waveCount);
        console.log(200 + 30 * p.sin(angle * waveCount));
        let x = radius * p.cos(angle);
        let y = radius * p.sin(angle);
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
  flex-grow: 1;
  width: 100%;
  background-color: #eee;
  padding: 0;
`;
