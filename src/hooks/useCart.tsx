import { createContext, ReactNode, useContext, useState } from "react";
import { Theme, toast, ToastPosition } from "react-toastify";

import { Product } from "@/@types/application";
import { getProduct } from "@/services/requests";

interface CartProviderProps {
  children: ReactNode;
}

interface UpdateProductAmount {
  productId: number;
  amount: number;
}

interface ProductInCart extends Product {
  amount: number;
}

interface CartContextData {
  cart: ProductInCart[];
  addProduct: (productId: number) => void;
  removeProduct: (productId: number) => void;
  updateProductAmount: ({ productId, amount }: UpdateProductAmount) => void;
}

const CartContext = createContext<CartContextData>({} as CartContextData);

const toastConfig = {
  position: "top-right" as ToastPosition,
  autoClose: 3000,
  theme: "colored" as Theme,
};

export function CartProvider({ children }: CartProviderProps) {
  const dbKey = "@Wefit-Ecommerce:cart";

  const [cart, setCart] = useState<ProductInCart[]>(() => {
    const storagedCart = sessionStorage.getItem(dbKey);

    if (storagedCart) {
      return JSON.parse(storagedCart);
    }

    return [];
  });

  const addProduct = async (productId: number) => {
    try {
      const productAlreadyInCart = cart.find(
        (product) => product.id === productId
      );

      if (!productAlreadyInCart) {
        const product = await getProduct(productId);

        setCart([...cart, { ...product, amount: 1 }]);

        sessionStorage.setItem(
          dbKey,
          JSON.stringify([...cart, { ...product, amount: 1 }])
        );

        toast.success("Produto adiconado com sucesso");
        return;
      }

      const updatedCart = cart.map((cartItem) =>
        cartItem.id === productId
          ? {
              ...cartItem,
              amount: Number(cartItem.amount) + 1,
            }
          : cartItem
      );

      setCart(updatedCart);
      localStorage.setItem(dbKey, JSON.stringify(updatedCart));

    } catch {
      toast.error("Error ao adicionar o produto ao carrinho.", toastConfig);
    }
  };

  const removeProduct = (productId: number) => {
    try {
      // TODO
    } catch {
      // TODO
    }
  };

  const updateProductAmount = ({ productId, amount }: UpdateProductAmount) => {
    try {
      // TODO
    } catch {
      // TODO
    }
  };

  return (
    <CartContext.Provider
      value={{ cart, addProduct, removeProduct, updateProductAmount }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);

  return context;
}
