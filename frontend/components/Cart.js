import { useShopContext } from "../lib/context";
import {
  CartWrapper,
  CartStyle,
  Card,
  CardInfo,
  EmptyDiv,
} from "../styles/CartStyles";
import { FaShoppingCart } from "react-icons/fa";

export default function Cart() {
  const { cartItems } = useShopContext();

  return (
    <CartWrapper>
      <CartStyle>
        {cartItems.length < 1 && (
          <EmptyDiv>
            <h1>You have more shopping to do 😉</h1>
            <FaShoppingCart />
          </EmptyDiv>
        )}
        {cartItems.length >= 1 &&
          cartItems.map((item) => {
            return (
              <Card>
                <img
                  src={item.image.data.attributes.formats.thumbnail.url}
                  alt={item.title}
                />
                <CardInfo>
                  <h3>{item.title}</h3>
                  <h3>{item.price}</h3>
                </CardInfo>
              </Card>
            );
          })}
      </CartStyle>
    </CartWrapper>
  );
}
