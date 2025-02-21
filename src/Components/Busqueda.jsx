import { useRef } from "react"

export const Busqueda = ({setresultados, seterror}) => {

const inputRef = useRef ()
    
  const getPaises = async (name) => {
    let response = await fetch ("https://restcountries.com/v3.1/name/" + name)
    let data = await response.json()
    console.log(data)
    if(data.status==404){
      seterror (true)
      return
    }seterror (false)
     setresultados(data)
  }
    return <>
    <h2>Busqueda de Paises</h2>
    <input type="Bus" ref={inputRef} onChange={()=> {
      if(inputRef.current.value!==""){
        getPaises(inputRef.current.value)
      }

      }}/>
    </>
}