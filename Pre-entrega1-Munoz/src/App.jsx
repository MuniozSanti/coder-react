import NavBar from './components/Navbar/navbar';
import ItemListContainer from './components/ItemListContainer/Itemlistcontainer';
import {Routes, Route } from "react-router-dom";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer.jsx";

function App() {
  return (
    <div>
 
      <NavBar />
      
      <ItemListContainer greeting="Hola Mundo!" />

      <Routes>
        <Route path='/' element={<ItemListContainer/>} />
        <Route path='/category/:id' element={<ItemListContainer/>} />
        <Route path='/item/:id' element={<ItemDetailContainer/>} />
      </Routes>
    </div>
  )
}

export default App
  