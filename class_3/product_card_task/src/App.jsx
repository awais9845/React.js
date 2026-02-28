import Navbar from "./components/Navbar/Navbar";
import ProductCard from "./components/products card/ProductCard";
import image from "./assets/product.jpeg";
const App = () => {
  return (
    <div>
      <Navbar />
      <div className="grid grid-cols-5 gap-1">
        <ProductCard
          data={{
            Image: "image",
            header: "Nikie Running Shoe",
            price: $69,
            btn: "Add to cart",
          }}
        />
        <ProductCard
          data={{
            Image: "image",
            header: "Nikie Running Shoe",
            price: $69,
            btn: "Add to cart",
          }}
        />
        <ProductCard
          data={{
            Image: "image",
            header: "Nikie Running Shoe",
            price: $69,
            btn: "Add to cart",
          }}
        />
        <ProductCard
          data={{
            Image: "image",
            header: "Nikie Running Shoe",
            price: $69,
            btn: "Add to cart",
          }}
        />
        <ProductCard
          data={{
            Image: image,
            header: "Nikie Running Shoe",
            price: 69,
            btn: "Add to cart",
          }}
        />
      </div>
    </div>
  );
};

export default App;
