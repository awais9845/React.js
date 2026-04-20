import Navbar from "./components/Navbar/Navbar";
import ProductCard from "./components/products card/ProductCard";
import image from "./assets/product.jpeg";
import { useEffect, useState } from "react";
const App = () => {
  const [data, setData] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("http://localhost:4000/orders/23");
      const result = await response.json();
      setData(result);
    };
    fetchData();
  }, []);

  return (
    <div>
      {/* <Navbar />
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
      </div> */}

      {data ? <h1> {data.message.name}</h1> : <h1>Lodading</h1>}
    </div>
  );
};

export default App;
