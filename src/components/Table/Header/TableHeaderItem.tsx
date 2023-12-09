import { HeaderItem } from "../styles";

interface Props {
  title: string;
}

export function TableHeaderItem({ title }: Props) {
  return (
    <HeaderItem>
      <strong>{title}</strong>
    </HeaderItem>
  );
}
