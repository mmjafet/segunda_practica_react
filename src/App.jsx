import React from 'react'
import { useState } from 'react'
import Header from './Header'

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
    </>
  )
}

export default App
