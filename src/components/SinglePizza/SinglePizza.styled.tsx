import styled from "styled-components";

export const Item = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .description {
    display: flex;
    flex-direction: column;
    img {
      width: 200px;
      height: 200px;
    }
  }
  .operation {
    display: flex;
    &__edit {
      &:hover {
        color: yellow;
      }
    }
    &__delete {
      &:hover {
        color: red;
      }
    }
  }
`;
