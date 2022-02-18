import styled from "styled-components";
const Test = styled.a`
  color: grey;
  &:hover {
    color: black;
  }
`;
export const Page = ({ name }) => {
  return <Test href={`/${name}`}>{name}</Test>;
};
