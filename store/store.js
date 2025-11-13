import { create } from "zustand";
import axios from "axios";

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
            set({loading: false})
        }
    }
}))