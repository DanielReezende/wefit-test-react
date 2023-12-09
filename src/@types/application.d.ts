export type Product = {
  id: number;
  title: string;
  price: number;
  image: string;
};

export interface ProductInCart extends Product {
  amount: number;
}



export interface CartItemsAmount {
  [key: number]: number;
}