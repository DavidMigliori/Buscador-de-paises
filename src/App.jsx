import { useState } from 'react'
import './App.css'
import { Busqueda } from './Components/Busqueda'
import { Resultados } from './Components/Resultados';

function App() {
  const [resultado, setresultados] = useState([])
  const [error,seterror] = useState (false)
 

  return (
    <>
      <Busqueda seterror={seterror} setresultados= {setresultados}/>
      <Resultados resultado={resultado} error = {error}/>
    </>
  )
}

export default App
