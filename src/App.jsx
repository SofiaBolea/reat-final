import { useState } from 'react'
import './App.css'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import { Main } from './Componentes/Main/Main'
import { Header } from './Componentes/Header/Header'
import { Contacto } from './Pages/Contacto/Contacto'
import back from './assets/back.jpg'

function App() {
  

  return (



    <div className="App">
      <BrowserRouter>
        <Header/>

      <Routes>
        <Route path='/' element={<Main/>}/>
        {/* <Route path='/Proyectos' element={<Proyectos/>}/> */}
        <Route path='/Contacto' element={<Contacto/>}/>
      </Routes>
      </BrowserRouter>

      
    </div>
  )
}

export default App
