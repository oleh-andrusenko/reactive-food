import { createContext, useState } from "react"
import { fetchMeals } from "../actions/fetchData"
import { useFetch } from "../hooks/useFetch"
import { toast } from "react-toastify"

export const CartContext = createContext({
  items: [],
  addItemToCart: () => {},
  updateItemQuantity: () => {},
  clearCart: () => {},
  showNotification: () => {},
})

export default function CartContextProvider({ children }) {
  const [cart, setCart] = useState({
    items: [],
  })
  const {
    isLoading,
    data: meals,
    setData: setMeals,
    error,
  } = useFetch(fetchMeals, [])

  function handleAddItemToCart(id) {
    setCart((prevShoppingCart) => {
      const updatedItems = [...prevShoppingCart.items]

      const existingCartItemIndex = updatedItems.findIndex(
        (cartItem) => cartItem.id === id
      )
      const existingCartItem = updatedItems[existingCartItemIndex]

      if (existingCartItem) {
        const updatedItem = {
          ...existingCartItem,
          quantity: existingCartItem.quantity + 1,
        }
        updatedItems[existingCartItemIndex] = updatedItem
      } else {
        const meal = meals.find((meal) => meal.id === id)
        console.log(meal)
        updatedItems.push({
          id: id,
          name: meal.name,
          price: meal.price,
          quantity: 1,
        })
      }

      return {
        items: updatedItems,
      }
    })
  }

  function handleUpdateCartItemQuantity(mealId, amount) {
    setCart((prevShoppingCart) => {
      const updatedItems = [...prevShoppingCart.items]
      const updatedItemIndex = updatedItems.findIndex(
        (item) => item.id === mealId
      )

      const updatedItem = {
        ...updatedItems[updatedItemIndex],
      }

      updatedItem.quantity += amount

      if (updatedItem.quantity <= 0) {
        updatedItems.splice(updatedItemIndex, 1)
      } else {
        updatedItems[updatedItemIndex] = updatedItem
      }

      return {
        items: updatedItems,
      }
    })
  }

  function handleClearCart() {
    setCart({ items: [] })
  }

  function handleNotification(type) {
    switch (true) {
      case type === 201: {
        toast.success("Order confirmed!", {autoClose: 1500})
        break
      }
      default: {
        toast.error("Something went wrong!")
      }
    }
  }

  const ctxValue = {
    items: cart.items,
    addItemToCart: handleAddItemToCart,
    updateItemQuantity: handleUpdateCartItemQuantity,
    clearCart: handleClearCart,
    showNotification: handleNotification,
  }

  return (
    <CartContext.Provider value={ctxValue}>{children}</CartContext.Provider>
  )
}
