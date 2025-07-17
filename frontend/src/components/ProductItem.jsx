import React from 'react'
import { useContext } from 'react'
import { ShopContext } from '../context/ShopContext.jsx'
import { Link } from 'react-router-dom'

const ProductItem = ({ id, image, price, name }) => {

    const { currency } = useContext(ShopContext);
    return (
        <Link to={`/product/${id}`} className='cursor-pointer text-gray-700' >
            <div className='overflow-hiddden'>
                <img src={image[0]} className='hover:scale-110 transition ease-in-out' alt="" />
            </div>
            <p className='text-sm pt-3 pb-1'>{name}</p>
            <p className='text-sm font-mediim'>{currency} {price}</p>
        </Link>
    )
}

export default ProductItem
