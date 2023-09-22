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
    const [estadoActual, setEstadoActual] = useState([])
    
    const consultarDatos = () => {
        return fetch(url)
            .then((res) => res.json())
            .then((condicionAtm) => setDatos(condicionAtm.results))
    }

    useEffect(() => {
        consultarDatos();
    }, [])

    return (
        <div className='h-screen bg-[url(https://images.unsplash.com/photo-1552432320-7f34d05319b6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1796&q=80)] bg-cover bg-no-repeat  flex justify-center w-full'>
            <div className="backdrop-blur-lg bg-black/10 w-full flex justify-center">
                <div className="flex gap-10 items-center">
                    <div className="flex flex-col items-center">
                        <h1 className="text-2xl font-bold">Estado del tiempo</h1>
                        <select
                            id="estadoSelect"
                            onChange={(e) => setEstadoActual(e.target.value)}
                            value={estadoActual}
                            className='p-4 text-xl font-bold my-10 rounded-xl text-center shadow-[0px_0px_30px_#222] bg-transparent cursor-pointer transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300'>
                            <option value="estadoSelect">Selecciona una opcion</option>
                            {estadosMx.map((opcion) => (
                                <option key={opcion.id} value={opcion.name}>
                                    {opcion.name}
                                </option>
                            )
                            )}
                        </select>
                    </div>
                    <div className=''>
                        <div className='h-80 overflow-y-auto'>
                            {datos.map((ciudad, index) =>  {
                                if (ciudad.state === estadoActual){
                                    return (
                                        <div className='flex flex-col text-xl m-2 p-2 text-white shadow-[0px_5px_5px_#222] bg-transparent rounded-xl' key={index}>
                                            <p>{ciudad.name} - <i>{ciudad.skydescriptionlong}</i></p>
                                        </div>
                                    );
                                }
                                return null;

                            })}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CondicionAtmosferica;