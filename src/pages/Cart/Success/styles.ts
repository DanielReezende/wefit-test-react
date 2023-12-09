import styled from "styled-components";

export const Container = styled.main`
  padding: 1.6rem;

  width: 100%;
`;

export const Wrapper = styled.div`
  width: 100%;

  background-color: var(--white-900);
  border-radius: var(--border-radius);

  display: flex;
  flex-direction: column;
  align-items: center;

  text-align: center;

  gap: 3.2rem;

  padding: 5.4rem 1.3rem;

  h1 {
    font-size: 2rem;
    line-height: 1.4;
    color: var(--blue-900);
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
