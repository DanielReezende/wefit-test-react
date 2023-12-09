import { useQuery } from "react-query";

// Icons
import { MdOutlineAddShoppingCart } from "react-icons/md";

// Components
import { Card } from "@/components/Card";
import { Button } from "@/components/Button";
import { Spinner } from "@/components/Spinner";

// Requests
import { getProducts } from "@/services/requests";

// Custom Hooks
import { useCart } from "@/hooks/useCart";

// Types
import { CartItemsAmount } from "@/@types/application";

import { Container, LoadingContainer } from "./styles";


export function Home() {
  const { isLoading, data } = useQuery("moviesData", getProducts);
  const { addProduct, cart } = useCart();

  const cartItemsAmount = cart.reduce((sumAmount, product) => {
    sumAmount[product.id] = product.amount;
    return sumAmount;
  }, {} as CartItemsAmount);

  function handleAddProduct(id: number) {
    addProduct(id);
  }

  if (isLoading) {
    return (
      <LoadingContainer>
        <Spinner />
      </LoadingContainer>
    );
  }

  return (
    <Container>
      <ul>
        {data?.map((product) => (
          <li key={product.id}>
            <Card.Container>
              <Card.Image src={product.image} />
              <Card.Title text={product.title} />
              <Card.Price price={product.price} />

              <Button.Container
                variant={cartItemsAmount[product.id] ? "success" : "default"}
                onClick={() => handleAddProduct(product.id)}
              >
                <Button.Icon>
                  <MdOutlineAddShoppingCart size={16} color="#ffff" />
                  {cartItemsAmount[product.id] || 0}
                </Button.Icon>
                ADICIONAR AO CARRINHO
              </Button.Container>
            </Card.Container>
          </li>
        ))}
      </ul>
    </Container>
  );
}
