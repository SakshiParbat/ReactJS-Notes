import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Product = () => {
  return (
    <div>
      <div className='flex justify-center gap-10 py-4'>
        <Link className='text-xl font-semibold' to='/product/men'>Men's</Link>
        <Link className='text-xl font-semibold' to='/product/women'>Women's</Link>
        <Link className='text-xl font-semibold' to='/product/kids'>Kid's</Link>
      </div>
      <Outlet/>
    </div>
  )
}

export default Product
