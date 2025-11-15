import React from "react";
import Checkout from "./Checkout";

const ProductDetails = ({ image, category, title, description, price }) => {
  const product = { image, category, title, description, price };
  return (
    <div className="flex flex-col md:flex-row items-start px-8 justify-between gap-12 my-20">
      <div className="image w-full md:w-[600px] h-full md:h-[600px] bg-amber-600 px-6 pt-6 flex items-center justify-center">
        <img
          src={image}
          alt={title}
          className="w-[90%] h-full objectobject-cover"
        />
      </div>
      <div className="content max-w-2xl">
        <div>
          <p className="text-sm text-gray-700">{category}</p>
          <h1 className="text-3xl py-3 md:text-4xl font-bold">{title}</h1>
          <p className="text-xl md:text-3xl mt-4 font-semibold">${price}</p>
          <div className="">
            <h4 className="text-lg font-bold mt-4 mb-2">Description:</h4>
            <p>{description}</p>
          </div>
        </div>
        <Checkout product={product} />
      </div>
    </div>
  );
};

export default ProductDetails;
