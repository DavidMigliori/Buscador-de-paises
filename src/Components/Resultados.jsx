export const Resultados = ({ resultado }) => {
    return <div className="row">
        {resultado.map((element, index) => {
            console.log(element)
            return <div className="col-3" key={index}>
                <h3>{element.name.common}</h3>
                <h5>{element.population}</h5>
                <img src={element.flags.svg} height={50} alt="" />

            </div>

        })}

    </div>
}