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
  const { title, description, price, category, image } = product;
  return (
    <div className="max-w-[1440px]  mt-20 mx-auto">
      <BreadCrum title={title} category={category} />
      <ProductDetails
        title={title}
        description={description}
        price={price}
        category={category}
        image={image}
      />
    </div>
  );
};

export default ProductPage;
