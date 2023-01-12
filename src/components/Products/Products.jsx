import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { getAll } from '../../features/products/productsSlice'
import Product from '../Product/Product'


const Products = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getAll())
    }, [])


    return (
        <div>
            <h1>
                Products
            </h1>
            <Product />
        </div>
    )
}

export default Products