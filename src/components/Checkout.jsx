import { useContext } from "react"
import { createPortal } from "react-dom"
import { CartContext } from "../context/cart-context"
import { useForm } from "react-hook-form"
import { putOrder } from "../actions/fetchData"
import { toast } from "react-toastify"
function Checkout({ onBack, onClose }) {
  const { items, clearCart, showNotification } = useContext(CartContext)
  const totalPrice = items.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  )
  const totalItems = items.reduce((acc, item) => acc + item.quantity, 0)

  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm({
    mode: "onBlur",
  })

  async function onSubmitForm(data) {
    console.log("submitted")
    console.log(JSON.stringify(data))
    const response = await putOrder({ customer: data, items: items })

    showNotification(response.status)
    reset()
    clearCart()
    onClose()
  }

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
            onSubmit={handleSubmit(onSubmitForm)}
            className='flex flex-col gap-2 w-[400px] p-8 '
          >
            <label htmlFor='name' className='font-bold'>
              Name
            </label>
            <input
              type='text'
              name='name'
              placeholder='Your name...'
              {...register("name", {
                required: "This field is required!",
                minLength: {
                  value: 3,
                  message: "Min length is 3 characters!",
                },
                maxLength: {
                  value: 64,
                  message: "Max value is 64 characters!",
                },
              })}
              className='border-[2px] p-2 md:p-1 rounded-xl focus:border-blue-600 focus:border-[2px] dark:text-black'
            />
            <p className='text-red-500 text-[12px]'>
              {errors?.name && <p>{errors?.name?.message || "Error!"}</p>}
            </p>
            <label htmlFor='phone' className='font-bold'>
              Phone
            </label>
            <input
              type='text'
              name='phone'
              placeholder='Your phone in format +380...'
              {...register("phone", {
                required: "This field is required!",
                minLength: {
                  value: 13,
                  message: "Min length is 13 characters!",
                },
                maxLength: {
                  value: 13,
                  message: "Max value is 13 characters!",
                },
              })}
              className='border-[2px] p-2 md:p-1 rounded-xl focus:border-blue-600 focus:border-[2px] dark:text-black'
            />
            <p className='text-red-500 text-[12px]'>
              {errors?.phone && <p>{errors?.phone?.message || "Error!"}</p>}
            </p>
            <label htmlFor='email' className='font-bold'>
              Email
            </label>
            <input
              type='text'
              name='email'
              placeholder='Your email...'
              {...register("email", {
                pattern: {
                  value:
                    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                  message: "Please enter a valid email",
                },
              })}
              className='border-[2px] p-2 md:p-1 rounded-xl focus:border-blue-600 focus:border-[2px] dark:text-black'
            />
            <p className='text-red-500 text-[12px]'>
              {errors?.email && <p>{errors?.email?.message || "Error!"}</p>}
            </p>
            <label htmlFor='address' className='font-bold'>
              Adress
            </label>
            <input
              type='text'
              name='adress'
              placeholder='Your shipping adress...'
              {...register("adress", {
                required: "This field is required!",
                minLength: {
                  value: 16,
                  message: "Min length is 16 characters!",
                },
                maxLength: {
                  value: 128,
                  message: "Max value is 128 characters!",
                },
              })}
              className='border-[2px] p-2 md:p-1 rounded-xl focus:border-blue-600 focus:border-[2px] dark:text-black'
            />
            <p className='text-red-500 text-[12px]'>
              {errors?.adress && <p>{errors?.adress?.message || "Error!"}</p>}
            </p>
            <label htmlFor='call' className='font-bold'>
              Don't call me to confirm
              <input
                type='checkbox'
                name='call'
                {...register("call", { required: false })}
                className='ml-4 w-4 h-4'
              />
            </label>

            <div className='flex items-center justify-center gap-4'>
              <button
                type='submit'
                className='px-4 py-2 rounded-xl uppercase bg-green-600 text-white'
              >
                Submit
              </button>

              <button
                onClick={onClose}
                className='px-4 py-2 rounded-xl uppercase bg-red-500 text-white'
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
      )
    </>,
    document.getElementById("modal")
  )
}

export default Checkout
