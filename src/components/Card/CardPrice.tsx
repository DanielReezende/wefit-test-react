

import { Price } from "./styles";
import { useCallback } from "react";

interface Props {
  price: number;
}

export function CardPrice({ price }: Props) {
  const formatPrice = useCallback(
    (value: number): string =>
      Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" }).format(
        value
      ),
    []
  );

  return <Price>{formatPrice(price)}</Price>;
}
