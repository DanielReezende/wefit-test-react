// Icons
import { MdOutlineAddShoppingCart } from "react-icons/md";

// Components
import { Card } from "@/components/Card";
import { Button } from "@/components/Button";

import { Container } from "./styles";

export function Home() {
  return (
    <Container>
      {[1, 2, 3, 4, 5, 6].map((number) => (
        <Card.Container key={number}>
          <Card.Image src="https://wefit-react-web-test.s3.amazonaws.com/shang-chi.png" />
          <Card.Title text="Shang-chi" />
          <Card.Price price={30.99} />

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
