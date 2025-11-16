import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useAxiosStore } from "../../store/store";
import ProductDetails from "../components/ProductDetails";
import BreadCrum from "../components/BreadCrum";
const ProductPage = () => {
  const Products = useAxiosStore((state) => state.products);
  const setProducts = useAxiosStore((state) => state.setProducts);
  const loading = useAxiosStore((state) => state.loading);

  useEffect(() => {
    if (Products.length === 0) {
      setProducts();
    }
  }, [Products, setProducts]);
  const { id } = useParams();
  if (loading || Products.length === 0) {
    return <h1>Loading...</h1>;
  }
  const product = Products.find((prod) => prod.id === parseInt(id));
  return (
    <div className="max-w-[1440px]  mt-20 mx-auto">
      <BreadCrum title={product.title} category={product.category} />
      <ProductDetails product={product} />
    </div>
  );
};

export default ProductPage;
