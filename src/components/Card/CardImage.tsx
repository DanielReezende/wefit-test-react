import React from "react";
import { Image } from "./styles";

type Props = React.ImgHTMLAttributes<HTMLImageElement>;

export function CardImage({ src, alt }: Props) {
  return <Image src={src} alt={alt} loading="eager" />;
}
