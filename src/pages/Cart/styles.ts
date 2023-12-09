import styled from "styled-components";

export const Wrapper = styled.div`
  padding: 1.6rem;
`;

export const Container = styled.main`
  padding: 1.6rem;

  width: 100%;
`;

export const EmptyContainer = styled.div`
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

export const ImageAndTitle = styled.div`
  display: flex;
  align-items: center;
  gap: 1.6rem;

  img {
    height: 100px;
  }

  > div {
    display: flex;
    gap: 0.5rem;

    strong {
      color: var(--blue-900);
      font-size: 1.4rem;
    }

    span {
      font-size: 1.6rem;
      color: var(--blue-900);
      font-weight: bold;
    }
  }

  @media (min-width: 610px) {
    flex: 1;
    max-width: 250px;
    gap: 2rem;

    align-items: center;

    > div {
      flex-direction: column;
    }
  }

  @media (min-width: 910px) {
    flex: 1;
    max-width: 300px;
    gap: 4rem;

    align-items: center;

    > div {
      flex-direction: column;
    }
  }
`;

export const Image = styled.img`
  height: 85px;
`;

export const TitleAndPrice = styled.div`
  display: flex;
  align-items: center;
  gap: 1.2rem;

  strong {
    color: var(--blue-900);
    display: block;
    font-size: 1.4rem;
  }

  span {
    display: block;
    font-size: 1.6rem;
    color: var(--blue-900);
    font-weight: bold;
  }
`;

export const InputContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;

  input {
    border: 1px solid var(--grey-200);
    border-radius: var(--border-radius);
    color: var(--blue-900);
    padding: 6px;
    width: 50px;
  }
`;

export const ActionButton = styled.button`
  background: none;
  border: 0;
  padding: 0.6rem;

  svg {
    color: var(--blue-500);
    transition: color 0.2s;
  }
`;

export const WrapperMobile = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 1.2rem;
`;
export const InputAndSubTotal = styled.div`
  display: flex;
  align-items: center;
  gap: 1.2rem;
`;

export const SubTotalContainer = styled.div`
  display: flex;
  flex-direction: column;

  span {
    font-size: 1.4rem;
    color: var(--grey-500);
    font-weight: bold;
  }

  strong {
    color: var(--blue-900);
    font-size: 1.6rem;
  }

  @media (min-width: 540px) {
    flex-direction: row;

    span {
      display: none;
      visibility: hidden;
      opacity: 0;
    }
  }
`;

export const Total = styled.div`
  display: flex;
  align-items: baseline;

  span {
    font-size: 1.4rem;
    color: var(--grey-500);
    font-weight: bold;
  }

  strong {
    color: var(--blue-900);
    font-size: 2.4rem;
    margin-left: 5px;
  }
`;
