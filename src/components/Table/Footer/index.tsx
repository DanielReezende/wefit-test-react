import { Footer } from "../styles";

interface Props {
  children: React.ReactNode;
}

export function TableFooter({ children }: Props) {
  return <Footer>{children}</Footer>;
}
