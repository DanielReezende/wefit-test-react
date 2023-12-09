export type Product = {
  id: number;
  title: string;
  price: number;
  image: string;
};


export interface CartItemsAmount {
  [key: number]: number;
}