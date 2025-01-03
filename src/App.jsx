import { useEffect, useState } from 'react'
import { pizza } from './components/Pizzadata'
import './App.css'
import Home from './components/Home/Home'
import OrderPizza from './components/OrderPizza/OrderPizza'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'

import Success from './Succes/Success'

function App() {
  const [orderStep, setOrderStep] = useState("home"); 

 

  return (
    <div>
    <Header/>
    <div>
        {orderStep === "home" && <Home setOrderStep={setOrderStep}/>} 
        {orderStep === "order" && <OrderPizza pizza={pizza}setOrderStep={setOrderStep}/>} 
        {orderStep === "success" && <Success setOrderStep={setOrderStep}/>}
      </div>
      <Footer/>
      </div>
  )
}

export default App
