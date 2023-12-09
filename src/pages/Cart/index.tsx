import {
  MdAddCircleOutline,
  MdDelete,
  MdRemoveCircleOutline,
} from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { useMediaQuery } from "usehooks-ts";

// Custom Hook
import { useCart } from "@/hooks/useCart";

// Components
import { Button } from "@/components/Button";
import { Card } from "@/components/Card";
import { Table } from "@/components/Table";

// Types
import { ProductInCart } from "@/@types/application";

// Helpers
import { formatPrice } from "@/helpers/formatPrice";

// Assets
import EmptyAvatar from "@/assets/images/empty.svg";

import {
  Container,
  EmptyContainer,
  InputContainer,
  SubTotalContainer,
  Total,
  Wrapper,
  ImageAndTitle,
  ActionButton,
  TitleAndPrice,
  Image,
  WrapperMobile,
  InputAndSubTotal,
} from "./styles";
import { toast } from "react-toastify";

export function Cart() {
  const { cart, removeProduct, updateProductAmount, finishPurchase } =
    useCart();
  const navigate = useNavigate();
  const matches = useMediaQuery("(min-width: 540px)");

  const cartFormatted = cart.map((product) => ({
    ...product,
    priceFormatted: formatPrice(product.price),
    subtotal: formatPrice(product.price * product.amount),
  }));

  const total = formatPrice(
    cartFormatted.reduce((sumTotal, product) => {
      sumTotal += product.price * product.amount;

      return sumTotal;
    }, 0)
  );

  function handleProductIncrement(product: ProductInCart) {
    const IncrementArguments = {
      productId: product.id,
      amount: product.amount + 1,
    };
    updateProductAmount(IncrementArguments);
  }

  function handleProductDecrement(product: ProductInCart) {
    const IncrementArguments = {
      productId: product.id,
      amount: product.amount - 1,
    };
    updateProductAmount(IncrementArguments);
  }

  function handleRemoveProduct(productId: number) {
    removeProduct(productId);
  }

  function handleFinishPurchase() {
    const isfinishedPuchase = finishPurchase();

    return isfinishedPuchase
      ? navigate("/cart/success")
      : toast.error("Erro ao finalizar compra", {
          autoClose: 3000,
          theme: "colored",
        });
  }

  if (cart.length === 0)
    return (
      <Container>
        <Card.Container>
          <EmptyContainer>
            <h1>{"Parece que não há nada por aqui :("}</h1>

            <img
              src={EmptyAvatar}
              alt="Avatar de Empty, para apresetação do carrinho quando ele se encontra vazio."
            />

            <Button.Container onClick={() => navigate("/")}>
              Voltar
            </Button.Container>
          </EmptyContainer>
        </Card.Container>
      </Container>
    );

  return (
    <Wrapper>
      {matches ? (
        <Table.Container>
          <Table.Header.Container>
            <Table.Header.Item title="PRODUTO" />
            <Table.Header.Item title="QTD" />
            <Table.Header.Item title="SUBTOTAL" />
            <Table.Header.Item title="" />
          </Table.Header.Container>

          {cartFormatted.map((product) => (
            <Table.Row key={product.id}>
              <ImageAndTitle>
                <img src={product.image} alt={product.title} />

                <div>
                  <strong>{product.title}</strong>
                  <span>{product.priceFormatted}</span>
                </div>
              </ImageAndTitle>

              <InputContainer>
                <ActionButton
                  type="button"
                  disabled={product.amount <= 1}
                  onClick={() => handleProductDecrement(product)}
                >
                  <MdRemoveCircleOutline size={20} />
                </ActionButton>
                <input
                  type="text"
                  data-testid="product-amount"
                  readOnly
                  value={product.amount}
                />
                <ActionButton
                  type="button"
                  onClick={() => handleProductIncrement(product)}
                >
                  <MdAddCircleOutline size={20} />
                </ActionButton>
              </InputContainer>

              <SubTotalContainer>
                <span>SUBTOTAL</span>
                <strong>{product.subtotal}</strong>
              </SubTotalContainer>

              <ActionButton
                type="button"
                onClick={() => handleRemoveProduct(product.id)}
              >
                <MdDelete size={20} />
              </ActionButton>
            </Table.Row>
          ))}

          <Table.Footer>
            <Button.Container>Finalizar pedido</Button.Container>

            <Total>
              <span>TOTAL</span>
              <strong>{total}</strong>
            </Total>
          </Table.Footer>
        </Table.Container>
      ) : (
        <Table.Container>
          {cartFormatted.map((product) => (
            <Table.Row key={product.id}>
              <Image src={product.image} alt={product.title} />

              <WrapperMobile>
                <TitleAndPrice>
                  <strong>{product.title}</strong>
                  <span>{product.priceFormatted}</span>

                  <ActionButton
                    type="button"
                    onClick={() => handleRemoveProduct(product.id)}
                  >
                    <MdDelete size={20} />
                  </ActionButton>
                </TitleAndPrice>

                <InputAndSubTotal>
                  <InputContainer>
                    <ActionButton
                      type="button"
                      disabled={product.amount <= 1}
                      onClick={() => handleProductDecrement(product)}
                    >
                      <MdRemoveCircleOutline size={20} />
                    </ActionButton>
                    <input type="text" readOnly value={product.amount} />
                    <ActionButton
                      type="button"
                      data-testid="increment-product"
                      onClick={() => handleProductIncrement(product)}
                    >
                      <MdAddCircleOutline size={20} />
                    </ActionButton>
                  </InputContainer>

                  <SubTotalContainer>
                    <span>SUBTOTAL</span>
                    <strong>{product.subtotal}</strong>
                  </SubTotalContainer>
                </InputAndSubTotal>
              </WrapperMobile>
            </Table.Row>
          ))}

          <Table.Footer>
            <Button.Container onClick={handleFinishPurchase}>
              Finalizar pedido
            </Button.Container>

            <Total>
              <span>TOTAL</span>
              <strong>{total}</strong>
            </Total>
          </Table.Footer>
        </Table.Container>
      )}
    </Wrapper>
  );
}
