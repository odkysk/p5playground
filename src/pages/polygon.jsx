import { useRef, useEffect } from "react";
import styled from "styled-components";
import p5 from "p5";
import { map } from "../utils.js";
export const Polygon = () => {
  const vertex = useRef(3);
  const onAddVertex = () => {
    vertex.current = vertex.current * 2;
  };
  const onRemoveAddVertex = () => {
    vertex.current -= vertex.current / 2;
  };
  const sketch = (p) => {
    const canvas = document.getElementById("canvas");
    let canvasWidth = canvas.clientWidth;
    let canvasHeight = canvas.clientHeight;
    p.setup = () => {
      p.createCanvas(canvasWidth, canvasHeight).parent("canvas");
      p.colorMode(p.HSB, 360, 100, 100);
      p.noStroke();
      p.rectMode(p.CENTER);
    };
    p.draw = () => {
      let angleStep = map(p.mouseX, 0, canvasWidth, 1, 60);
      let radius = canvasHeight - p.mouseY;
      console.log(angleStep);
      p.clear();
      p.beginShape(p.TRIANGLE_FAN);
      p.vertex(p.width / 2, p.height / 2);
      for (let angle = -90; angle <= 361; angle += angleStep) {
        p.fill(angle, 100, 100);
        let vx = p.width / 2 + p.cos(p.radians(angle)) * radius;
        let vy = p.height / 2 + p.sin(p.radians(angle)) * radius;
        p.vertex(vx, vy);
      }
      p.endShape();
    };
  };
  useEffect(() => {
    new p5(sketch);
  }, [vertex]);
  return (
    <>
      <Canvas id="canvas" />
      <ButtonBox>
        <AddVertex onClick={onAddVertex}>AddVertex</AddVertex>
        <AddVertex onClick={onRemoveAddVertex}>RemoveVertex</AddVertex>
      </ButtonBox>
    </>
  );
};
const Canvas = styled.div`
  height: 100vh;
  width: 100%;
  background-color: #eee;
`;
const AddVertex = styled.button`
  height: 44px;
  padding: 0 24px;
  background-color: #ccc;
  display: flex;
  align-items: center;
  justify-content: center;
  &:hover {
    background-color: #bbb;
  }
`;
const ButtonBox = styled.div`
  position: fixed;
  top: 20px;
  left: 20px;
  display: flex;
  gap: 12px;
`;
