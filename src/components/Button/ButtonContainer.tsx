import { ButtonVariant, Container } from "./styles";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: ButtonVariant;
}

export function ButtonContainer({
  children,
  variant = "default",
  ...rest
}: ButtonProps) {
  return (
    <Container variant={variant} {...rest}>
      {children}
    </Container>
  );
}
