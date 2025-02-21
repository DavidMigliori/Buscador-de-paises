import { useState } from 'react'
import './App.css'
import { Busqueda } from './Components/Busqueda'
import { Resultados } from './Components/Resultados';
import { Historial } from './Components/Historial';

function App() {
  const [resultado, setresultados] = useState([])
  const [error, seterror] = useState(false)


  return (
    <>
      <Busqueda seterror={seterror} setresultados={setresultados} />
      <Resultados resultado={resultado} error={error} />
      <Historial resultado={resultado.length == 1 ? resultado[0] : undefined} />
    </>
  )
}

export default App
