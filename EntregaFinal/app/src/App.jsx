import { Routes, Route } from "react-router-dom"
import ItemListContainer from "./components/ItemListContainer"
import ItemDetailContainer from "./components/ItemDetailContainer"
import NavBar from "./components/NavBar"
import CartProvider from "./context/CartProvider"
import Checkout from "./components/checkout";

function App() {
  return (
    <CartProvider>
      <NavBar />

      <h1 className="body">App</h1>

      <div className="body">
        <Routes>
          <Route path='/' element={<ItemListContainer />} />

          <Route path='/category/:categoryId' element={<ItemListContainer />} />

          <Route path='/item/:id' element={<ItemDetailContainer />} />

          <Route path='/checkout' element={<Checkout />} />
          
        </Routes>
      </div>
    </CartProvider>
  )
}

export default App
