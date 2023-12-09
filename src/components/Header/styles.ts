import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.header`
  width: 100%;

  padding: 2.4rem 1.6rem;

  display: flex;
  align-items: center;
  justify-content: space-between;

  h2 {
    font-size: 2rem;
  }
`;

export const CarLink = styled(Link)`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  text-decoration: none;

  > div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: right;

    strong,
    span {
      font-weight: 600;
      display: block;
      transition: all 0.2s ease-in-out;
      line-height: 1.1;
    }

    strong {
      font-size: 1.4rem;
    }

    span {
      font-size: 1.2rem;
      color: var(--grey-500);
    }
  }

  @media (max-width: 420px) {
    > div {
      strong {
        display: none;
        visibility: hidden;
        opacity: 0;
      }
    }
  }
`;
