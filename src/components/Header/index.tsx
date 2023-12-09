import { Container, CarLink } from "./styles";
import { MdShoppingBasket } from "react-icons/md";


export function Header() {
  return (
    <Container>
      <h2>WeMovies</h2>

      <nav>
        <CarLink to="/cart">
          <div>
            <strong>Meu Carrinho</strong>
            <span>0 itens</span>
          </div>

          <MdShoppingBasket color="#fff" size={32} />
        </CarLink>
      </nav>
    </Container>
  );
}
