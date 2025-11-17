import { create } from "zustand";
import axios from "axios";
import ProductCard from "../src/components/ProductCard";

export const useAxiosStore = create((set) => ({
  products: [],
  loading: false,
  error: null,
  setProducts: async () => {
    set({ loading: true, error: null });
    try {
      let response = await axios.get(import.meta.env.VITE_ProductURL);
      set({ products: response.data });
    } catch (error) {
      console.log(error.message);
      set({ error: error.message });
    } finally {
      set({ loading: false });
    }
  },
}));

export const useProductStore = create((set) => ({
  count: 1,
  increment: () => {
    set((state) => ({ count: state.count + 1 }));
  },
  decrement: () => {
    set((state) => ({ count: state.count - 1 }));
  },
  isVisible: false,
  setIsVisible: () => {
    set((state) => ({ isVisible: !state.isVisible }));
  },
  cart: [],
  productCount: 0,
  sizes: ["S", "M", "L", "XL", "XXL"],
  selectedSize: "",
  selectSize: (size) => set({ selectedSize: size }),
  addToCart: (product) => {
    set((state) => {
      let exist = state.cart.find((item) => item.id === product.id);
      if (exist) {
        return {
          cart: state.cart.map((item) =>
            item.id === product.id
              ? { ...item, quantity: state.count, size: state.selectedSize }
              : item,
          ),
        };
      }
      return {
        selectedSize: "",
        cart: [
          ...state.cart,
          { ...product, quantity: state.count, size: state.selectedSize },
        ],
        count: 1,
        productCount: state.productCount + 1,
      };
    });
  },
  removeFromCart: (id) => {
    set((state) => {
      let deleteCart = state.cart.filter((item) => item.id !== id);
      return { cart: deleteCart, productCount: state.productCount - 1 };
    });
  },
  emptyCart: () => {
    set({ cart: [], productCount: 0 });
  },
}));
