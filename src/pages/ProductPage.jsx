import React, { use, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useAxiosStore } from '../../store/store';
const ProductPage = () => {
    const Products = useAxiosStore((state) => state.products);
    const setProducts = useAxiosStore((state) => state.setProducts);
    const loading = useAxiosStore((state) => state.loading);

    useEffect(() => {
        if (Products.length === 0) {
            setProducts();
        }
    }, [Products, setProducts])
    const {id} = useParams();
    if (loading || Products.length === 0) {
        return <h1>Loading...</h1>;
    }
    const product = Products.find((prod) => prod.id === parseInt(id))
    console.log(product);
  return (
    <div>{product.title}</div>
  )
}

export default ProductPage