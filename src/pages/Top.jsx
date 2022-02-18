import styled from "styled-components";
import { Page } from "../components/Page";
export const Top = () => {
  return (
    <Main>
      <Page name="test220130" />
      <Page name="grid" />
      <Page name="polygon" />
      <Page name="circle" />
    </Main>
  );
};

const Main = styled.h1`
  font-size: 24px;
  padding: 48px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 12px;
`;
