import { Routes, Route } from "react-router-dom"
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './componentes/Footer'
import Footer from './componentes/Footer'
import Login from './componentes/Login'
import Header from './componentes/Header'
import Registro from "./componentes/Registro"

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="Aplicacion">
      <Routes>
        <Route path="/login" element={ <Login /> } />
        <Route path="/registro" element={<Registro />}/>
      </Routes>
    </div>
   
  )
}

export default App
