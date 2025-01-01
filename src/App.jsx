<<<<<<< HEAD
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
=======
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import workintech from '/workintech.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://github.com/Workintech/fsweb-s7-challenge-pizza" target="_blank">
          <img src={workintech} className="logo" alt="Workintech logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Workintech + 🍕</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          Absolute Acı Pizza sayısı {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Workintech or Pizza logos to learn more
      </p>
    </>
  )
}

export default App
>>>>>>> a3f8cbf1e4011b701203e2cceb2a907509f8dada
