import { formatPrice } from "@/helpers/formatPrice";

import { Price } from "./styles";


interface Props {
  price: number;
}

export function CardPrice({ price }: Props) {

  return <Price>{formatPrice(price)}</Price>;
}
