import { Row } from "../styles";

interface Props {
  children: React.ReactNode;
}

export function TableRow({ children }: Props) {
  return <Row>{children}</Row>;
}
