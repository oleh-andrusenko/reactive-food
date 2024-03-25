import Header from "./components/Header"
import Products from "./components/Products"
import CartContextProvider from "./context/cart-context"
import { ToastContainer} from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
function App() {


  return (
    <>
      <CartContextProvider>
        <Header />
        <Products />

        <ToastContainer />
      </CartContextProvider>
    </>
  )
}

export default App
