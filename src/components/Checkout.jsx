import { useProductStore } from "../../store/store";

const Checkout = () => {
    const {count, increment, decrement} = useProductStore()
    const sizes = ["S", "M", "L", "XL", "XXL"];
  return (
    <div>
        <div className="sizes mb-8">
            <h4 className="text-lg font-bold mt-8 mb-2">SIZE: </h4>
            <div className="flex items-center gap-3">
            {sizes.map((size, index) => (
                    <button className="border w-full h-8 border-gray-300 rounded-md cursor-pointer hover:bg-black hover:text-white transition-all duration-200" key={index}>{size}</button>
                ))}
                </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="count w-full grid grid-cols-3 gap-3">
            <button onClick={decrement} className='text-2xl border border-gray-300 rounded-md cursor-pointer'>-</button>
            <button className='border border-gray-300 text-xl rounded-md'>{count}</button>
            <button onClick={increment} className='border border-gray-300 text-2xl rounded-md cursor-pointer'>+</button>
        </div>
        <div className="checkout">
            <button className="py-4 w-full px-4 bg-amber-600 rounded-md text-lg text-white font-semibold">Checkout</button>
        </div>
        </div>

    </div>
  )
}

export default Checkout