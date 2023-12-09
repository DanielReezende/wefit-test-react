import { Container } from "./styles";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: 'default' | "success";
}

export function ButtonContainer({ children, variant = "default" }: ButtonProps) {
  return <Container variant={variant}>{children}</Container>;
}
