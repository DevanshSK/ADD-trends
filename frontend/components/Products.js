import { ProductStyle } from "../styles/ProductStyle";

export default function Product({ key, product }) {
  // Extract the info from props
  console.log(product);
  const { title, price, image } = product.attributes;
  console.log(key);

  return (
    <ProductStyle>
      <div>
        <img src={image.data.attributes.formats.small.url} alt="" />
      </div>
      <h2>{title}</h2>
      <h3>₹{price}</h3>
    </ProductStyle>
  );
}
