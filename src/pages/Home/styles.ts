import styled from "styled-components";

const columns = (numberColumns: number) =>
  `repeat(${numberColumns}, minmax(0, 1fr))`;

export const Container = styled.main`
  padding: 1.6rem;

  ul {
    list-style: none;

    display: grid;
    grid-template-columns: ${columns(1)};
    gap: 1.6rem;
  }

  @media (min-width: 610px) {
    ul {
      grid-template-columns: ${columns(2)};
    }
  }

  @media (min-width: 910px) {
    ul {
      grid-template-columns: ${columns(3)};
    }
  }
`;

export const LoadingContainer = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;

  flex: 1;
`;
