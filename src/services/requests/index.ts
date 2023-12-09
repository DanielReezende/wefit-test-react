import { Product } from "@/@types/application";
import api from "../api";

export const getProducts = async () => {
  const { data } = await api.get<Product[]>("/products");

  return data;
};
