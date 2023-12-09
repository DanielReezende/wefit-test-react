import { Container } from "./styles";


interface Props {
  children: React.ReactNode
}

export function CardContainer({ children }: Props) {
  return (
    <Container>
      {children}
    </Container>
  );
}
