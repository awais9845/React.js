import Navbar from "./components/Navbar/Navbar";
import ProductCard from "./components/products card/ProductCard";

const App = () => {
  return (
    <div>
      <Navbar />
      <div className="grid grid-cols-5 gap-1">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </div>
  );
};

export default App;
