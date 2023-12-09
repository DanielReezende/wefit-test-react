import { Product } from "@/@types/application";
import api from "../api";

export const getProducts = async () => {
  const { data } = await api.get<Product[]>("/products");

  return data;
};

export const getProduct = async(id: number): Promise<Product> => {
  const { data } = await api.get<Product>(`/products/${id}`);

  return data;
}