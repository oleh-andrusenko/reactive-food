import React from 'react'

function Cart() {
  return (
    <div className='md:w-32 md:flex md:gap-2 md:items-center text-white'>
        <i className='bx bx-cart-alt text-4xl text-white' ></i>
        <p className='hidden md:block'>Total: 2</p>
    </div>
  )
}

export default Cart