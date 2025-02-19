import { useState } from 'react'
import './App.css'
import { Busqueda } from './Components/Busqueda'
import { Resultados } from './Components/Resultados';

function App() {
  const [resultado, setresultados] = useState([])
 

  return (
    <>
      <Busqueda setresultados= {setresultados}/>
      <Resultados resultado={resultado}/>
    </>
  )
}

export default App
