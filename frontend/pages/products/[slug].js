import { useQuery } from "urql";
import { GET_PRODUCT_QUERY } from "../../lib/query";
import { useRouter } from "next/router";
import {
  DetailsStyled,
  ProductInfo,
  Quantity,
  Buy,
  Price,
  Title,
} from "../../styles/ProductDetails";
import { AiFillPlusCircle, AiFillMinusCircle } from "react-icons/ai";
//Example
import { useStateContext } from "../../lib/context";

export default function ProductDetails() {
  // Use state
  const { qty, increaseQty, decreaseQty, onAdd } = useStateContext();

  // Fetch Slug
  const { query } = useRouter();

  // Fetch grqphql data
  const [results] = useQuery({
    query: GET_PRODUCT_QUERY,
    variables: { slug: query.slug },
  });
  const { data, fetching, error } = results;

  // Check for the data coming in
  if (fetching) return <h1>Loading......</h1>;
  if (error) return <p>Oh nooo, {error.message}...</p>;

  // Extract the data
  const { title, description, image, price } = data.products.data[0].attributes;

  return (
    <DetailsStyled>
      <img src={image.data.attributes.formats.medium.url} alt={title} />
      <ProductInfo>
        <Title>{title}</Title>
        <p>{description}</p>
        <Price>₹{price}</Price>

        <Quantity>
          <span>Quantity</span>
          <button>
            <AiFillMinusCircle onClick={decreaseQty} />
          </button>
          <p>{qty}</p>
          <button>
            <AiFillPlusCircle onClick={increaseQty} />
          </button>
        </Quantity>
        <Buy onClick={() => onAdd(data.products.data[0].attributes, qty)}>
          Add to Cart
        </Buy>
      </ProductInfo>
    </DetailsStyled>
  );
}
