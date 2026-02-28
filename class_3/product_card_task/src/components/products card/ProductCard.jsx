const ProductCard = (props) => {
  console.log(props.data);
  return (
    <div>
      <div>
        <img src="Image" alt="image" />
      </div>
      <div>
        <p>Product: {props.data.header}</p>
        <p>Price: {props.data.price}</p>
        <button>btn: {props.data.btn}</button>
      </div>
    </div>
  );
};
export default ProductCard;
