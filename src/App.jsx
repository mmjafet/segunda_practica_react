import React from 'react'
import { useState } from 'react'

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
    
    </>
  )
}

export default App
