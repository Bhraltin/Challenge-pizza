import React, { useState } from "react"
import Header from './components/Header/Header'
import Success from "./Succes/Success"
import Home from "./components/Home/Home"
import OrderPizza from './components/OrderPizza/OrderPizza';




function App() {
  const [sayfa, setSayfa] = useState('home');

 function handleSayfa(yeniSayfa) {
  setSayfa(yeniSayfa);
  }

return (

   
<div>
      <Header />
      {sayfa === 'home' && <Home handleSayfa={() => handleSayfa('orderPizza')} />}
      {sayfa === 'orderPizza' && <OrderPizza handleSayfa={() => handleSayfa('success')} />}
      {sayfa === 'success' && <Success/>}
    </div>




)

}

export default App;
