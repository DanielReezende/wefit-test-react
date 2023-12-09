import styled, { keyframes } from 'styled-components';

export const Container = styled.article`
  width: 100%;

  padding: 1rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius:  var(--border-radius);

  gap: 0.8rem;

  background: var(--white-900);
`;



const appearOpacity = keyframes`
from {
  opacity: 0;

}

to {
  opacity: 1;
}
`;

export const Image = styled.img`
  width: 100%;
  max-width: 150px;
  height: auto;

  opacity: 1;
  transition: opacity 0.4s ease-in-out;
  animation: ${appearOpacity} 1s;

  object-fit: cover;
`;


export const Title = styled.h1`
  font-size: 1.4rem;
  line-height: 1.4;
  color: var(--grey-900);
`;


export const Price = styled.h3`
  font-size: 2rem;
  line-height: 1.6;

  color: var(--blue-900);
`;
