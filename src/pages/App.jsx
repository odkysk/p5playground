import styled from "styled-components";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Top } from "./Top";
import { Test220130 } from "./test220130";
import { Grid } from "./grid";
import { Polygon } from "./polygon";
import { Circle } from "./circle";
export const App = () => {
  const Wrapper = styled.div`
    min-width: 100vw;
    min-height: 100vh;
    background-color: #ddd;
  `;

  return (
    <>
      <Wrapper>
        <BrowserRouter>
          <Routes>
            <Route exact path="" element={<Top />}></Route>
            <Route path="/test220130" element={<Test220130 />} />
            <Route path="/grid" element={<Grid />} />
            <Route path="/polygon" element={<Polygon />} />
            <Route path="/circle" element={<Circle />} />
          </Routes>
        </BrowserRouter>
      </Wrapper>
    </>
  );
};
