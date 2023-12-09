import { Title } from "./styles";

interface Props {
  text: string;
}

export function CardTitle({ text }: Props) {
  return <Title>{text}</Title>;
}
