import { createPortal } from "react-dom"
import { useContext, useState } from "react"
import { CartContext } from "../context/cart-context"
import Checkout from "./Checkout"

function CartModal({ open, onClose }) {
  const { items, updateItemQuantity } = useContext(CartContext)
  const [checkout, setCheckout] = useState(false)
  const totalPrice = items.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  )
  const totalItems = items.reduce((acc, item) => acc + item.quantity, 0)
  if (!open) return null
  return createPortal(
    <>
      <div className='fixed top-0 left-0 bottom-0 right-0 bg-slate-600/50 dark:bg-slate-900/50 z-10 grid place-content-center'>
        <div className='p-12 bg-white dark:bg-slate-700 dark:text-white z-11 h-[700px] md:h-[500px] w-[400px] md:w-[600px] rounded-lg grid place-content-center'>
          {items.length > 0 && (
            <>
              <h4 className='text-center text-xl font-bold mb-2'>Your order</h4>
              <div
                id='cart-list'
                className='h-[500px] w-[400px] md:w-[500px] md:h-[300px] overflow-auto '
              >
                <table className='w-full border-collapse text-sm '>
                  <tr className='border-b-[1px]'>
                    <th className='py-2'>#</th>
                    <th className='py-2'>Name</th>
                    <th className='py-2'>Price</th>
                    <th className='py-2'>Quantity</th>
                    <th className='py-2'>Total</th>
                  </tr>
                  {items.map((item, index) => (
                    <tr key={item.id} className='border-b-[1px]'>
                      <td className='py-2 px-1 md:p-2 text-center'>
                        {index + 1}
                      </td>
                      <td className='md:px-4 md:py-2'>{item.name}</td>
                      <td className='md:px-4 md:py-2'>${item.price}</td>
                      <td className='text-center md:px-4 md:py-2'>
                        <div className='flex justify-between'>
                          <button
                            onClick={() => updateItemQuantity(item.id, -1)}
                            className='w-5 h-5 rounded-full font-semibold mr-2 bg-red-600 text-white '
                          >
                            -
                          </button>
                          <p className=''>{item.quantity}</p>
                          <button
                            onClick={() => updateItemQuantity(item.id, 1)}
                            className='w-5 h-5 rounded-full font-semibold ml-2 bg-green-600 text-white'
                          >
                            +
                          </button>
                        </div>
                      </td>
                      <td className=' w-24 md:px-4 md:py-2 text-center'>
                        ${(item.price * item.quantity).toFixed(2)}
                      </td>
                    </tr>
                  ))}
                  <tr>
                    <td colSpan={3} className='text-right'>
                      Total:
                    </td>

                    <td className='text-center font-bold'>{totalItems}</td>
                    <td className='text-center font-bold text-lg'>
                      ${totalPrice.toFixed(2)}
                    </td>
                  </tr>
                </table>
              </div>
            </>
          )}
          {items.length === 0 && <p>No items in the cart yet...</p>}
          <div className='flex items-center justify-center mt-8 gap-4'>
            {items.length > 0 && (
              <button
                onClick={() => setCheckout(true)}
                className='px-4 py-2 rounded-xl uppercase bg-blue-600 text-white'
              >
                checkout
              </button>
            )}
            <button
              className='px-4 py-2 rounded-xl uppercase bg-red-500 text-white'
              onClick={onClose}
            >
              close
            </button>
          </div>
        </div>
      </div>

      {checkout && (
        <Checkout
          onBack={() => {
            setCheckout(false)
            onClose()
          }}
        />
      )}
    </>,
    document.getElementById("modal")
  )
}

export default CartModal
