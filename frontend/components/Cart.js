import { useStateContext } from "../lib/context";
import {
  CartWrapper,
  CartStyle,
  Card,
  CardInfo,
  EmptyDiv,
  Checkout,
  CloseCart,
} from "../styles/CartStyles";
import { Quantity } from "../styles/ProductDetails";
import { FaShoppingCart } from "react-icons/fa";
import {
  AiFillPlusCircle,
  AiFillMinusCircle,
  AiOutlineClose,
} from "react-icons/ai";

export default function Cart() {
  const { cartItems, setShowCart, onAdd, onRemove, totalPrice } =
    useStateContext();

  return (
    <CartWrapper
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      onClick={() => setShowCart(false)}
    >
      <CartStyle
        animate={{ x: "0%" }}
        initial={{ x: "50%" }}
        exit={{ x: "50%" }}
        transition={{ type: "tween" }}
        onClick={(e) => e.stopPropagation()}
      >
        <CloseCart>
          <AiOutlineClose onClick={() => setShowCart(false)} />
        </CloseCart>
        {cartItems.length < 1 && (
          <EmptyDiv
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            onClick={() => setShowCart(false)}
          >
            <h1>You have more shopping to do 😉</h1>
            <FaShoppingCart />
          </EmptyDiv>
        )}
        {cartItems.length >= 1 &&
          cartItems.map((item) => {
            return (
              <Card
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 }}
                key={item.slug}
              >
                <img
                  src={item.image.data.attributes.formats.small.url}
                  alt={item.title}
                />
                <CardInfo>
                  <h3>{item.title}</h3>
                  <h3>₹{item.price}</h3>
                  <Quantity>
                    <span>Quantity</span>

                    <button onClick={() => onRemove(item)}>
                      <AiFillMinusCircle />
                    </button>
                    <p>{item.quantity}</p>
                    <button onClick={() => onAdd(item, 1)}>
                      <AiFillPlusCircle />
                    </button>
                  </Quantity>
                </CardInfo>
              </Card>
            );
          })}
        {cartItems.length >= 1 && (
          <Checkout>
            <h2>Subtotal: ₹{totalPrice}</h2>
            <button>Purchase</button>
          </Checkout>
        )}
      </CartStyle>
    </CartWrapper>
  );
}
