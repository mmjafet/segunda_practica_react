import React from 'react'
import { useState } from 'react'
import Header from './Header'
import Formulario from './Formulario'
import Tarea from './Tareas'

const App = () => {
  const [Contador, setContador] = useState(0)
  const aumnentarContador = () => {
    setContador(Contador + 1)
  }
  const disminuirContador = () => {
    setContador(Contador - 1)
  }
  return (
    <>
    <Header />
    <Formulario />
    <Tarea />
    </>
  )
}

export default App
