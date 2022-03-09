import styled from "styled-components";
import p5 from "p5";
import { useEffect } from "react";
export const SuperEllipse = () => {
  const sketch = (p) => {
    const canvas = document.getElementById("canvas");
    const canvasWidth = canvas.clientWidth;
    const canvasHeight = canvas.clientHeight;

    const drawSuperArc = (startX, startY, startAngle, endAngle, n, radius) => {
      let x, y;
      for (let t = startAngle; t <= endAngle; t += p.TAU / 120) {
        x =
          radius * Math.sign(p.cos(t)) * p.pow(p.abs(p.cos(t)), 2 / n) -
          radius *
            Math.sign(p.cos(startAngle)) *
            p.pow(p.abs(p.cos(startAngle)), 2 / n) +
          startX;
        y =
          radius * Math.sign(p.sin(t)) * p.pow(p.abs(p.sin(t)), 2 / n) -
          radius *
            Math.sign(p.sin(startAngle)) *
            p.pow(p.abs(p.sin(startAngle)), 2 / n) +
          startY;
        p.circle(x, y, 1);
      }
      return { x, y };
    };
    const drawWellness = (x, y, size) => {
      let endPoint = { x: x, y: y };
      endPoint = drawSuperArc(
        endPoint.x,
        endPoint.y,
        p.TAU / 19,
        p.TAU / 3,
        2.5,
        100
      );
      console.log(endPoint);
      endPoint = drawSuperArc(
        endPoint.x,
        endPoint.y,
        -p.TAU / 9,
        (p.TAU * 10) / 12,
        2.5,
        200
      );
      endPoint = drawSuperArc(
        endPoint.x,
        endPoint.y,
        -p.TAU / 9,
        (p.TAU * 1) / 12,
        2.5,
        200
      );
      console.log(endPoint);
    };
    p.setup = () => {
      p.colorMode(p.HSB, 360, 100, 100, 1);
      p.createCanvas(canvasWidth, canvasHeight).parent("canvas");
      p.noFill();
      p.stroke(0, 0, 0, 0.4);
      p.strokeWeight(1);
      p.translate(canvasWidth / 2, canvasHeight / 2);
      p.circle(0, 0, 4); //CENTER OF CANVAS
      drawWellness(0, 0, 100);
    };
  };
  useEffect(() => {
    new p5(sketch);
  }, []);
  return <Canvas id="canvas"></Canvas>;
};
const Canvas = styled.div`
  flex-grow: 1;
  height: 100vh;
  overflow: hidden;
`;
