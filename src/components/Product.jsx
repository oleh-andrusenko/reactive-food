import React, { useContext } from "react"
import { CartContext } from "../context/cart-context"
import { motion } from "framer-motion"
import { toast } from "react-toastify"
function Product({ product }) {
  const { addItemToCart } = useContext(CartContext)
  return (
    <motion.div
      initial={{ marginTop: -20, opacity: 0.6 }}
      animate={{ marginTop: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className='w-full p-4 flex flex-col  items-center justify-between  shadow-xl rounded-xl border-2 my-1 dark:bg-dark-grey dark:border-0 dark:text-white gap-2 bg-white'
    >
      <img
        className='block w-full rounded-lg h-2/3 md:h-[55%]'
        src={`https://reactive-food-backend.onrender.com/${product.image}`}
        alt={product.name}
      />
      <div className='md:h-[45%] p-2 md:p-4 w-full flex flex-col justify-between md:justify-around'>
        <div className='flex justify-between items-center'>
          <p className='text-xl font-semibold w-1/2'>{product.name}</p>
          <button
            onClick={() => {
              addItemToCart(product.id)
              toast.success(`${product.name} added to cart.`, {
                position: "bottom-right",
                autoClose: 1200,
              })
            }}
            className='w-1/3 h-10 py-1 px-2 rounded-full border-2 border-blue-600 text-blue-600 font-semibold hover:text-white hover:bg-blue-600 text-sm'
          >
            Add to cart
          </button>
        </div>
        <div className=' w-full text-sm my-4 text-slate-700 dark:text-slate-100'>
          {product.description}
        </div>
        <div className='flex justify-between items-center'>
          <p className='py-2 px-4 bg-blue-600 text-white rounded-full text-xl'>
            ${product.price}
          </p>
          <p className='flex items-center justify-between gap-1 text-xl'>
            <i className='bx bx-time text-2xl'></i>
            {product.time} mins
          </p>
          <p className='flex items-center justify-between gap-1 text-xl'>
            <i className='bx bx-package text-2xl'></i>Free
          </p>
        </div>
      </div>
    </motion.div>
  )
}

export default Product
