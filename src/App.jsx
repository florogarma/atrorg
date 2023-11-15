import { BrowserRouter, Routes, Route } from "react-router-dom"

import { NavBar } from "./components/NavBar"
import { ItemListContainer } from "./components/ItemListContainar"
import { Error404 } from "./components/Error404"

function App() {

  return (
    <BrowserRouter>
    <NavBar />
    <Routes>
    <Route path='/' element = {<ItemListContainer greeting="Hola!"/>}/>
      <Route path='/category/:id' element = {<ItemListContainer greeting="Hola!"/>}/>
      <Route path='/item/:id' element = {<div> Detalle </div>}/>
      <Route path='*' element = {<Error404 />}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App
