export default function Product({ key, product }) {
  // Extract the info from props
  console.log(product);
  const { title, price, image } = product.attributes;
  console.log(key);

  return (
    <div>
      <div>
        <img src={image.data.attributes.formats.small.url} alt="" />
      </div>
      <h2>{title}</h2>
      <h3>₹{price}</h3>
    </div>
  );
}
