import { useQuery } from "react-query";

// Icons
import { MdOutlineAddShoppingCart } from "react-icons/md";

// Components
import { Card } from "@/components/Card";
import { Button } from "@/components/Button";
import { Spinner } from "@/components/Spinner";

// Requests
import { getProducts } from "@/services/requests";

import { Container, LoadingContainer } from "./styles";
import { Product } from "@/@types/application";

export function Home() {
  const { isLoading, data } = useQuery<Product[]>("moviesData", getProducts);

  if (isLoading) {
    return (
      <LoadingContainer>
        <Spinner />
      </LoadingContainer>
    );
  }

  return (
    <Container>
      {data?.map((product) => (
        <Card.Container key={product.id}>
          <Card.Image src={product.image} />
          <Card.Title text={product.title} />
          <Card.Price price={product.price} />

          <Button.Container>
            <Button.Icon>
              <MdOutlineAddShoppingCart size={16} color="#ffff" />0
            </Button.Icon>
            ADICIONAR AO CARRINHO
          </Button.Container>
        </Card.Container>
      ))}
    </Container>
  );
}
