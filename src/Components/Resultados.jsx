export const Resultados = ({ resultado, error }) => {
    if (error) {
        return  <h2>No se encontro Pais</h2>
    }
    return <div className="row">
        {resultado.map((element, index) => {
            return <div className="col-3" key={index}>
                <h3>{element.name.common}</h3>
                <h5>{element.population}</h5>
                <img src={element.flags.svg} height={50} alt="" />

            </div>

        })}

    </div>
}