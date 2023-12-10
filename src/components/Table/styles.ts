import styled from "styled-components";

export const Container = styled.ul`
  width: 100%;
  padding: 2rem;
  background: ${({ theme }) => theme.white_900};
  border-radius: ${({ theme }) => theme.border_radius};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Header = styled.header`
  width: 100%;
  padding: 12px 12px 12px 0px;

  transition: all 0.2s ease-in-out;

  @media (min-width: 550px) {
    display: grid;
    grid-template-columns: minmax(225px, 250px) minmax(100px, 150px) auto;
    gap: 2rem;
  }

  @media (min-width: 700px) {
    display: grid;
    grid-template-columns: minmax(225px, 300px) minmax(100px, 150px) auto;
    gap: 2rem;
  }

  @media (min-width: 820px) {
    display: grid;
    grid-template-columns:
      minmax(300px, 400px) minmax(120px, 150px) minmax(200px, 215px)
      auto;
    gap: 2rem;
  }
`;

export const HeaderItem = styled.div`
  color: ${({ theme }) => theme.grey_500};
  text-align: left;

  text-transform: uppercase;
  font-size: 16px;
`;

export const Row = styled.li`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: space-around;
  gap: 1.2rem;

  margin-bottom: 2rem;

  @media (min-width: 610px) {
    display: grid;
    grid-template-columns:
      minmax(200px, 275px) minmax(120px, 150px) minmax(100px, 115px)
      auto;
    gap: 2rem;
    justify-content: start;
  }

  @media (min-width: 820px) {
    grid-template-columns:
      minmax(300px, 400px) minmax(120px, 150px) minmax(200px, 215px)
      auto;
    gap: 2rem;
    justify-content: start;
  }
`;

export const Footer = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-end;
  gap: 1.6rem;

  margin-top: 2rem;

  padding-top: 2rem;

  border-top: 1px solid ${({ theme }) => theme.grey_500};

  > div {
    order: 1;
  }

  button {
    order: 2;
  }

  @media (min-width: 820px) {
    flex-direction: row;
    align-items: center;

    > div {
      order: 2;
    }

    button {
      order: 1;
      max-width: 235px;
    }
  }
`;
