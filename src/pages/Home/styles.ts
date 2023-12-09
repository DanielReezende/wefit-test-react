import styled from 'styled-components';

const columns = (numberColumns: number) =>  `repeat(${numberColumns}, minmax(0, 1fr))`;

export const Container = styled.main`
  display: grid;
  grid-template-columns: ${columns(1)};
  gap: 1.6rem;

  padding: 1.6rem;



  @media (min-width: 610px) {
    grid-template-columns: ${columns(2)};
  }

  @media (min-width: 910px) {
    grid-template-columns: ${columns(3)};
  }
`;
