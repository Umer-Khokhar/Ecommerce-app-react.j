import { Link } from "react-router-dom";
const ProductCard = ({ title, image, price, id }) => {
  return (
    <Link to={`/product-details/${id}`}>
      <div className="w-[300px] cursor-pointer group">
        <div className="image w-full h-[300px] bg-[#a09591] rounded-md p-4 flex justify-center items-center group-hover:scale-105 transition-all duration-300">
          <img
            src={image}
            alt={title}
            className="w-[90%] h-full object-cover"
          />
        </div>
        <div className="content py-3">
          <p className="md:text-lg">${price}</p>
          <h3 className="title text-xl font-bold">{title}</h3>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
