import { useRef } from "react"

export const Busqueda = ({setresultados}) => {

const inputRef = useRef ()
    
  const getPaises = async (name) => {
    let response = await fetch ("https://restcountries.com/v3.1/name/" + name)
    let data = await response.json()
     setresultados(data)
  }
    return <>
    <h2>Busqueda de Paises</h2>
    <input type="Bus" ref={inputRef} onChange={()=> {getPaises(inputRef.current.value)}}/>
    </>
}