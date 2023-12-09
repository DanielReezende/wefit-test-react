import { IconContainer } from "./styles";

interface Props {
  children: React.ReactNode;
}

export function ButtonIcon({ children }: Props) {
  return <IconContainer>{children}</IconContainer>;
}
