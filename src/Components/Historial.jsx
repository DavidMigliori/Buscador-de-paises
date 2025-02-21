import { useEffect, useState } from "react"

export const Historial = ({ resultado }) => {
    const [historial, sethistorial] = useState([])

    useEffect(() => {
        if (resultado) {
            sethistorial([...historial, resultado])
        }
    }, [resultado])

    return <>
        <h2>Historial</h2>
        {historial.map((element,index)=>{
            return <div key={index}>
                <h4>{element.name.common}</h4>
            </div>
        })}
    </>

}

