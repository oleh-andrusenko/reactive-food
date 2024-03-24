import { useState } from "react"
import Header from "./components/Header"
import Products from "./components/Products"
import CartContextProvider from "./context/cart-context"
function App() {
  const [cart, setCart] = useState([])

  function handleAddToCart(item) {
    setCart((prevCart) => [...prevCart, item])
  }

  return (
    <CartContextProvider>
      <Header cart={cart} />
      <Products onAddToCart={handleAddToCart} />
    </CartContextProvider>
  )
}

export default App
