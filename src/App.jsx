import React from 'react'
import BasicExample from './component/navbar/BasicExample'
import Products from './component/products/Products'
import { Route,  Routes } from 'react-router-dom'
import Resturant from './component/resturant/Resturant'

export default function App() {
  return (
    <>
     <BasicExample/>
    <Routes>
      <Route path='/products' element={ <Products/>}/>
      <Route path='/resturant' element={<Resturant/>}/>
    </Routes>
 
    </>
  )
}
