import styled, { css } from "styled-components";

export type ButtonVariant = "default" | "success";

interface Props {
  variant: ButtonVariant;
}

export const Container = styled.button<Props>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 1.2rem;

  width: 100%;
  padding: 1.1rem 2rem;

  font-size: 1.4rem;
  font-weight: bold;
  text-transform: uppercase;

  background: var(--blue-500);
  color: var(--white-900);

  border-radius: var(--border-radius);

  ${({ variant }) =>
    variant === "success" &&
    css`
      background: var(--green-900);
    `}
`;


export const IconContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.4rem;

  font-size: 1.4rem;

  color: var(--white-900);
`;