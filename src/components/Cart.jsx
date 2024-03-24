import { useContext, useState } from "react"
import { CartContext } from "../context/cart-context"
import CartModal from "./CartModal"
function Cart() {
  const { items } = useContext(CartContext)
  const [modal, setModal] = useState(false)
  const totalPrice = items.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  )

  const formattedPrice = totalPrice.toFixed(2)
  return (
    <>
      <div className='md:w-40 md:flex md:gap-2 md:items-center text-blue-600 dark:text-white'>
        <button className='relative' onClick={() => setModal(!modal)}>
          <i className='bx bx-cart-alt text-4xl'></i>
          <p className='absolute -top-2 -right-3 bg-red-500 rounded-full w-6 h-6 text-center text-white'>
            {items.length}
          </p>
        </button>
        <div>
          <p className='hidden md:block text-sm w-20 text-center p-2 bg-blue-600 text-white rounded-full font-semibold ml-4'>
            ${formattedPrice}
          </p>
        </div>
      </div>
      <CartModal open={modal} onClose={() => setModal(false)} />
    </>
  )
}

export default Cart
