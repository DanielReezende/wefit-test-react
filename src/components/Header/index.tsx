import { Link } from "react-router-dom";
import { Container, CarLink } from "./styles";
import { MdShoppingBasket } from "react-icons/md";


export function Header() {
  return (
    <Container>
      <Link to="/">
        <h2>WeMovies</h2>
      </Link>

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
