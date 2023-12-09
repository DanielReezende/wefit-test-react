import { Header } from "../styles";

interface Props {
  children: React.ReactNode;
}

export function TableHeaderContainer({ children }: Props) {
  return <Header>{children}</Header>;
}