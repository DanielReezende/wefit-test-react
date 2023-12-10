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

  background: ${({ theme }) => theme.blue_500};
  color: ${({ theme }) => theme.white_900};

  border-radius: ${({ theme }) => theme.border_radius};

  ${({ variant }) =>
    variant === "success" &&
    css`
      background: ${({ theme }) => theme.green_900};
    `}
`;

export const IconContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.4rem;

  font-size: 1.4rem;

  color: ${({ theme }) => theme.white_900};
`;
