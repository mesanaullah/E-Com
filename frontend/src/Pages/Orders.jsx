import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from '../components/Title';

const Orders = () => {

  const { products, currency } = useContext(ShopContext);

  return (
    <div className='border-t border-gray-300 pt-16'>

      <div className='text-2xl'>
        <Title text1={'MY'} text2={'ORDERS'} />
      </div>

      <div>
        {
          products.slice(1, 4).map((item, index) => (
            <div key={index} className='py-4 border-t border-b border-gray-300 text-gray-700 grid grid-cols-[4fr_0.5fr_0.5fr] sm:grid-cols-[4fr_2fr_0.5fr] items-center gap-4'>
              <div className='flex items-start gap-6 text-sm'>
                <img className='w-16 sm:w-20' src={item.image[0]} alt="" />
                <div>
                  <p className='sm:text-base font-medium'>{item.name}</p>
                  <div className='flex items-center mt-2 gap-3 text-base text-gray-700'>
                    <p className='text-lg'>{currency}{item.price}</p>
                    <p>Quantity: 1</p>
                    <p>Size: M</p>
                  </div>
                  <p className='mt-2'>Date: <span className='text-gray-400'>24 July 2025</span></p>
                </div>
              </div>

              <div className='md:w-1/2 flex justify-between'>
                <div className='flex items-center gap-2'>
                  <p className='min-w-2 h-2 rounded-full bg-green-500'></p>
                  <p className='text-sm md:text-base'>Ready to ship</p>
                </div>
              </div>
              <button className='w-full border border-gray-300 px-4 py-2 text-sm font-medium rounded-sm cursor-pointer'>TrackOrder</button>
            </div>
          ))
        }
      </div>

    </div>
  )
}

export default Orders
