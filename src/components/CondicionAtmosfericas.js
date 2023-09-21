import { useEffect, useState } from "react";

function CondicionAtmosferica(){
    const url = "https://api.datos.gob.mx/v1/condiciones-atmosfericas";
    const estadosMx = [
        { "id": 1, "name": "Aguascalientes" },
        { "id": 2, "name": "Baja California" },
        { "id": 3, "name": "Baja California Sur" },
        { "id": 4, "name": "Campeche" },
        { "id": 5, "name": "Chiapas" },
        { "id": 6, "name": "Chihuahua" },
        { "id": 7, "name": "Coahuila" },
        { "id": 8, "name": "Colima" },
        { "id": 9, "name": "Durango" },
        { "id": 10, "name": "Guanajuato" },
        { "id": 11, "name": "Guerrero" },
        { "id": 12, "name": "Hidalgo" },
        { "id": 13, "name": "Jalisco" },
        { "id": 14, "name": "Estado de México" },
        { "id": 15, "name": "Michoacán" },
        { "id": 16, "name": "Morelos" },
        { "id": 17, "name": "Nayarit" },
        { "id": 18, "name": "Nuevo León" },
        { "id": 19, "name": "Oaxaca" },
        { "id": 20, "name": "Puebla" },
        { "id": 21, "name": "Querétaro" },
        { "id": 22, "name": "Quintana Roo" },
        { "id": 23, "name": "San Luis Potosí" },
        { "id": 24, "name": "Sinaloa" },
        { "id": 25, "name": "Sonora" },
        { "id": 26, "name": "Tabasco" },
        { "id": 27, "name": "Tamaulipas" },
        { "id": 28, "name": "Tlaxcala" },
        { "id": 29, "name": "Veracruz" },
        { "id": 30, "name": "Yucatán" },
        { "id": 31, "name": "Zacatecas" },
    ]
    const [datos, setDatos] = useState([])
    const [estadoActual, setEstadoActual] = useState("Aguascalientes")
    
    const consultarDatos = () => {
        return fetch(url)
            .then((res) => res.json())
            .then((condicionAtm) => setDatos(condicionAtm.results))
    }

    useEffect(() => {
        consultarDatos();
    }, [])

    return (
        <>
            <select
                id="estadoSelect"
                onChange={(e) => setEstadoActual(e.target.value)}
                value={estadoActual}
            >
                <option value="estadoSelect">Selecciona una opcion</option>
                {estadosMx.map((opcion) => (
                    <option key={opcion.id} value={opcion.name}>
                        {opcion.name}
                    </option>
                )
                )}
            </select>
            <h1>Estado del tiempo</h1>
            {datos.map((ciudad, index) =>  {
                if (ciudad.state === estadoActual){
                    return (
                        <div key={index}>
                            <p>{ciudad.name} - <i>{ciudad.skydescriptionlong}</i></p>
                        </div>
                    );
                }
                return null;

            })}
        </>
    )
}

export default CondicionAtmosferica;