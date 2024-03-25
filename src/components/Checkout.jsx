import { useContext } from "react"
import { createPortal } from "react-dom"
import { CartContext } from "../context/cart-context"
function Checkout({ onBack }) {
  function handleSubmit(e) {
    e.preventDefault()
  }

  const { items } = useContext(CartContext)
  const totalPrice = items.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  )
  const totalItems = items.reduce((acc, item) => acc + item.quantity, 0)
  return createPortal(
    <>
      <div className='fixed top-0 left-0 bottom-0 right-0 bg-slate-600/50 dark:bg-slate-900/50 z-10 grid place-content-center'>
        <div className='p-12 bg-white dark:bg-slate-700 dark:text-white z-11 h-[700px] md:h-[600px] md:w-[600px] w-[400px] rounded-lg grid place-content-center relative'>
          <button
            onClick={onBack}
            className='absolute left-5 top-5 z-10 text-lg flex items-center justify-center'
          >
            <i className='bx bx-arrow-back mr-2'></i>
            Back
          </button>
          <h4 className='text-center text-2xl font-bold'>Order confirmation</h4>
          <p className='text-center'>Order price: ${totalPrice.toFixed(2)}</p>
          <p className='text-center'>Items: {totalItems}</p>
          <form
            onSubmit={handleSubmit}
            className='flex flex-col gap-2 w-[400px] p-8'
          >
            <label htmlFor='name' className='font-bold'>
              Name
            </label>
            <input
              type='text'
              name='name'
              className='border-[2px] p-2 md:p-1 rounded-xl focus:border-blue-600 focus:border-[2px]'
            />
            <label htmlFor='phone' className='font-bold'>
              Phone
            </label>
            <input
              type='text'
              name='phone'
              className='border-[2px] p-2 md:p-1 rounded-xl focus:border-blue-600 focus:border-[2px]'
            />
            <label htmlFor='email' className='font-bold'>
              Email
            </label>
            <input
              type='text'
              name='email'
              className='border-[2px] p-2 md:p-1 rounded-xl focus:border-blue-600 focus:border-[2px]'
            />
            <label htmlFor='address' className='font-bold'>
              Adress
            </label>
            <input
              type='text'
              name='adress'
              className='border-[2px] p-2 md:p-1 rounded-xl focus:border-blue-600 focus:border-[2px]'
            />
            <label htmlFor='call' className='font-bold'>
              Don't call me to confirm
              <input type='checkbox' name='call' className='ml-4 w-4 h-4' />
            </label>
          </form>

          <div className='flex items-center justify-center mt-8 gap-4'>
            <button className='px-4 py-2 rounded-xl uppercase bg-green-600 text-white'>
              Confirm
            </button>

            <button
              onClick={onBack}
              className='px-4 py-2 rounded-xl uppercase bg-red-500 text-white'
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
      )
    </>,
    document.getElementById("modal")
  )
}

export default Checkout
