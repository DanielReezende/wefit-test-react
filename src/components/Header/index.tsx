import { Link } from "react-router-dom";
import { Container, CarLink } from "./styles";
import { MdShoppingBasket } from "react-icons/md";
import { useCart } from "@/hooks/useCart";

export function Header() {
  const { cart } = useCart();
  const cartSize = cart.length;

  return (
    <Container>
      <Link to="/">
        <h2>WeMovies</h2>
      </Link>

      <nav>
        <CarLink to="/cart">
          <div>
            <strong>Meu Carrinho</strong>
            <span>
              {cartSize === 1 ? `${cartSize} item` : `${cartSize} itens`}
            </span>
          </div>

          <MdShoppingBasket color="#fff" size={32} />
        </CarLink>
      </nav>
    </Container>
  );
}
