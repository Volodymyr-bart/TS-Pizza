import styled from "styled-components";

export const DisplayPizzasStyled = styled.div`
  display: flex;
  flex-direction: column;
`;
export const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);

  column-gap: 30px;
  row-gap: 20px;
`;
