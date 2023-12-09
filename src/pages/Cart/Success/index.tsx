
// Component
import { Button } from "@/components/Button";
import { Card } from "@/components/Card";

import SuccessAvatar from '@/assets/images/success.svg'

import { Container, Wrapper } from "./styles";
import { useNavigate } from "react-router-dom";

export function Success() {
  const navigate = useNavigate();

  return (
    <Container>
      <Card.Container>
        <Wrapper>
          <h1>Compra realizada com sucesso!</h1>

          <img src={SuccessAvatar} alt="Avatar de sucesso, para apresetação da finalização do pedido." />

          <Button.Container onClick={() => navigate("/")}>Voltar</Button.Container>
        </Wrapper>
      </Card.Container>
    </Container>
  );
}
