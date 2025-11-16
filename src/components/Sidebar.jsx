import React from "react";
import { useProductStore } from "../../store/store";
import { Delete } from "lucide-react";
import { X } from "lucide-react";
const Sidebar = () => {
  const cart = useProductStore((state) => state.cart);
  const isVisible = useProductStore((state) => state.isVisible);
  const setIsVisible = useProductStore((state) => state.setIsVisible);
  const productCount = useProductStore((state) => state.productCount);
  const emptyCart = useProductStore((state) => state.emptyCart);
  const removeFromCart = useProductStore((state) => state.removeFromCart);
  return isVisible ? (
    <div className="absolute top-0 right-0 left-0 bottom-0 w-full h-full bg-black/50 z-50">
      <div className="absolute top-0 bottom-0 right-0 py-4 px-8 w-md bg-white/50 backdrop-blur-xl z-50">
        <div className="container">
          <X
            className="w-8 h-8 font-bold absolute right-4 top-4 cursor-pointer"
            onClick={setIsVisible}
          />
          <h2 className="text-2xl font-bold">All Checkout Products</h2>
          <div className="flex flex-col gap-4 items-start my-12 justify-center">
            {cart.map((item) => (
              <div className="relative flex items-center gap-4 border border-gray-600 py-2 px-3 w-full">
                <div className="w-16 h-16 bg-gray-500 p-2">
                  <img
                    src={item.image}
                    className="w-full h-full object-cover"
                    alt={item.title}
                  />
                </div>
                <div>
                  <h4 className="text-xl font-semibold">{item.title}</h4>
                  <div className="flex items-center gap-4">
                    <p>${item.price}</p>
                    <p>x{item.quantity}</p>
                  </div>
                </div>
                <Delete
                  onClick={() => removeFromCart(item.id)}
                  className="h-7 w-7 text-red-600 absolute right-4 top-1/2 -translate-1/2 "
                />
              </div>
            ))}
            {productCount > 0 && (
              <button
                onClick={emptyCart}
                className="cursor-pointer text-center text-white flex items-center justify-center mx-auto py-2 px-3 rounded-lg bg-black/90"
              >
                Clear Carts
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  ) : null;
};

export default Sidebar;
