import { Routes, Route } from "react-router-dom"
import ItemListContainer from "./components/ItemListContainer"
import ItemDetailContainer from "./components/ItemDetailContainer"
import NavBar from "./components/NavBar"

function App() {
  return (
    <div>
      <NavBar />

      <h1 className="body">App</h1>

      <div className="body">
        <Routes>
          <Route path='/' element={<ItemListContainer />} />
          <Route path='/category/:categoryId' element={<ItemListContainer />} />
          <Route path='/item/:id' element={<ItemDetailContainer />} />
        </Routes>
      </div>
    </div>
  )
}

export default App
