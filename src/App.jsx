import { useEffect } from "react";
import "./App.css";
import { useAxiosStore } from "../store/store";
import ProductCard from "./components/ProductCard";
function App() {
  const { products, setProducts, loading, error } = useAxiosStore();
  useEffect(() => {
     setProducts();
  }, [])
  if (loading) {
    return <h1>Loading...</h1>;
  }
  if (error) {
    return <h1>Error: {error}</h1>;
  }
  return (
      <div className="grid grid-col-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 p-4">
        {products.map((product) => (
          <ProductCard title={product.title} image={product.image} price={product.price.toFixed(2)} key={product.id} id={product.id}/>
        ))}
      </div>
  );
}

export default App;
