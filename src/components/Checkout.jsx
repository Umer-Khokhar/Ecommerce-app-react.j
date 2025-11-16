import { useProductStore } from "../../store/store";
import { ShoppingCart } from "lucide-react";

const Checkout = ({ product }) => {
  const { count, increment, decrement } = useProductStore();
  const addToCart = useProductStore((state) => state.addToCart);
  const cart = useProductStore((state) => state.cart);
  console.log(cart);
  const sizes = ["S", "M", "L", "XL", "XXL"];
  return (
    <div>
      <div className="sizes mb-8">
        <h4 className="text-lg font-bold mt-8 mb-2">SIZE: </h4>
        <div className="flex items-center gap-3">
          {sizes.map((size, index) => (
            <button
              className="border w-full h-8 border-gray-300 rounded-md cursor-pointer hover:bg-black hover:text-white transition-all duration-200"
              key={index}
            >
              {size}
            </button>
          ))}
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="count w-full grid grid-cols-3 gap-3">
          <button
            onClick={decrement}
            className="text-2xl border border-gray-300 rounded-md cursor-pointer"
          >
            -
          </button>
          <button className="border border-gray-300 text-xl rounded-md">
            {count}
          </button>
          <button
            onClick={increment}
            className="border border-gray-300 text-2xl rounded-md cursor-pointer"
          >
            +
          </button>
        </div>
        <div className="checkout">
          <button
            onClick={() => addToCart(product)}
            className="py-4 w-full flex items-center justify-center gap-3 cursor-pointer hover:bg-amber-600 px-4 bg-amber-500 rounded-md text-lg text-white font-semibold"
          >
            <ShoppingCart className="w-6 h-6 font-bold text-white" />
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
