import { useCallback } from "react";
import { Price } from "./styles";

interface Props {
  price: number;
}

export function CardPrice({ price }: Props) {
  
  const formatPrice = useCallback((value: number) => {
    return value.toLocaleString("pt-br", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });
  }, []);

  return <Price>{formatPrice(price)}</Price>;
}
