import { Container } from "../styles";

interface Props {
  children: React.ReactNode;
}

export function TableContainer({ children }: Props) {
  return <Container>{children}</Container>;
}
