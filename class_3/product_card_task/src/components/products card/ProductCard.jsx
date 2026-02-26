import product from "./../../assets/product.jpeg";

const ProductCard = () => {
  return (
    <div className="border  p-2 m-1 flex flex-col gap-0.5">
      <div className="h-45 border  rounded-2xl overflow-hidden">
        <img src={product} className="w-full h-full " alt="product image" />
      </div>
      <div className="p-1  rounded-t-lg ">
        <h1>Nike Running Shoe</h1>
        <div className="flex gap-1">
          <div className="ptb-0.5 pl-2 pr-2 border text-center rounded-2xl">
            Erase
          </div>
          <div className="ptb-0.5 pl-2 pr-2 border text-center rounded-2xl">
            white and black
          </div>
        </div>
        <p className="text-[13px]">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione sed
          accusantium vero temporibus vel obcaecati?
        </p>
        <div>
          <div className="flex justify-between">
            <div>
              <p>price</p>
              <h4 className="border rounded-2xl pl-0.5 pr-0.5">$69.99</h4>
            </div>
            <button className="border h-8 mt-4 pl-1 pr-1 bg-[green] text-blue-50 cursor-pointer">
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProductCard;
