import styled from "styled-components";

export const Container = styled.main`
  padding: 1.6rem;

  width: 100%;
`;

export const Wrapper = styled.div`
  width: 100%;

  background-color: ${({ theme }) => theme.white_900};
  border-radius: ${({ theme }) => theme.border_radius};

  display: flex;
  flex-direction: column;
  align-items: center;

  text-align: center;

  gap: 3.2rem;

  padding: 5.4rem 1.3rem;

  h1 {
    font-size: 2rem;
    line-height: 1.4;
    color: ${({ theme }) => theme.blue_900};
  }

  img {
    width: 100%;
    max-width: 295px;
    object-fit: cover;
  }

  button {
    max-width: 160px;
  }
`;
