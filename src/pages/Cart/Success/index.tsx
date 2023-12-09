// Component
import { Button } from "@/components/Button";
import { Card } from "@/components/Card";

import SuccessAvatar from "@/assets/images/success.svg";

import { Container, Wrapper } from "./styles";
import { Navigate, useNavigate } from "react-router-dom";
import { useCart } from "@/hooks/useCart";

export function Success() {
  const navigate = useNavigate();
  const { isPurchased } = useCart();

  if (!isPurchased) {
    return <Navigate to="/" />;
  }

  return (
    <Container>
      <Card.Container>
        <Wrapper>
          <h1>Compra realizada com sucesso!</h1>

          <img
            src={SuccessAvatar}
            alt="Avatar de sucesso, para apresetação da finalização do pedido."
          />

          <Button.Container onClick={() => navigate("/")}>
            Voltar
          </Button.Container>
        </Wrapper>
      </Card.Container>
    </Container>
  );
}
