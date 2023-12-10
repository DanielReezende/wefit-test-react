import { createContext, ReactNode, useContext, useState } from "react";
import { Theme, toast, ToastPosition, ToastContainer } from "react-toastify";

// Types
import { ProductInCart } from "@/@types/application";

// Requests
import { getProduct } from "@/services/requests";

interface CartProviderProps {
  children: ReactNode;
}

interface UpdateProductAmount {
  productId: number;
  amount: number;
}

interface CartContextData {
  cart: ProductInCart[];
  isPurchased: boolean;
  addProduct: (productId: number) => Promise<void>;
  removeProduct: (productId: number) => void;
  updateProductAmount: ({ productId, amount }: UpdateProductAmount) => void;
  finishPurchase: () => boolean;
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
  const [isPurchased, setPurchased] = useState(false);

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
      toast.error("Error ao adicionar o produto ao carrinho.", { ...toastConfig });
    }
  };

  const removeProduct = (productId: number) => {
    try {
      const productExists = cart.some(
        (cartProduct) => cartProduct.id === productId
      );

      if (!productExists) {
        toast.error("Erro na remoção do produto", toastConfig);
        return;
      }

      const updatedCart = cart.filter((cartItem) => cartItem.id !== productId);

      setCart(updatedCart);

      sessionStorage.setItem(dbKey, JSON.stringify(updatedCart));
    } catch {
      toast.error("Error ao remover o produto ao carrinho.", toastConfig);
    }
  };

  const updateProductAmount = ({ productId, amount }: UpdateProductAmount) => {
    try {
      const productExists = cart.find(
        (cartProduct) => cartProduct.id === productId
      );

      if (!productExists) {
        toast.error("Erro na alteração de quantidade do produto");
        return;
      }

      if (amount < 1) {
        toast.error("Erro na alteração de quantidade do produto");
        return;
      }

      const updatedCart = cart.map((cartItem) =>
        cartItem.id === productId
          ? {
              ...cartItem,
              amount: amount,
            }
          : cartItem
      );
      setCart(updatedCart);
      sessionStorage.setItem(dbKey, JSON.stringify(updatedCart));

      toast.success("Produto removido com successo.", toastConfig);
    } catch {
      toast.error("Erro na alteração de quantidade do produto", toastConfig);
    }
  };

  const finishPurchase = () => {
    if (cart.length > 0) {
      setPurchased(true);
      
      return true;
    }

    return false;
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        isPurchased,
        addProduct,
        removeProduct,
        updateProductAmount,
        finishPurchase,
      }}
    >
      {children}
      
      <ToastContainer />
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);

  return context;
}
