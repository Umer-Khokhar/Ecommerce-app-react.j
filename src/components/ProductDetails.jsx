import React from "react";
import Checkout from "./Checkout";
import { useProductStore } from "../../store/store";

const ProductDetails = ({ product }) => {
  const count = useProductStore((state) => state.count);
  return (
    <div className="flex flex-col md:flex-row items-start px-8 justify-between gap-12 my-20">
      <div className="image w-full md:w-[600px] h-full md:h-[600px] bg-amber-600 px-6 pt-6 flex items-center justify-center">
        <img
          src={product.image}
          alt={product.title}
          className="w-[90%] h-full object-cover"
        />
      </div>
      <div className="content max-w-2xl">
        <div>
          <p className="text-sm text-gray-700">{product.category}</p>
          <h1 className="text-3xl py-3 md:text-4xl font-bold">
            {product.title}
          </h1>
          <p className="text-xl md:text-3xl mt-4 font-semibold">
            ${product.price * count}
          </p>
          <div className="">
            <h4 className="text-lg font-bold mt-4 mb-2">Description:</h4>
            <p>{product.description}</p>
          </div>
        </div>
        <Checkout product={product} />
      </div>
    </div>
  );
};

export default ProductDetails;
