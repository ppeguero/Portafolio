import React, { useState } from "react";

function Formulario(){
    // ¿qué es un hook?
    // manejo de estados de los campos del formulario
    const [campos, setCampos] = useState({
        usuario:'',
        contrasenia:''
    })

    //const para manejar el evento del formulario
    // una funcion flecha es para ahorrar código

    const procesarLogin = (event) =>{
        event.preventDefault();
        console.log("Se envía el formulario")
    } 
    return(
        <form className="form" onSubmit={procesarLogin}>
            <input type="text" placeholder="Usuario" className="form-control"
            onChange={(e)=>setCampos({...campos,usuario:e.target.value})}></input>
            <input type="password" placeholder="Contraseña"
            onChange={(e)=>setCampos({...campos,contrasenia:e.target.value})}></input>
            <button className="bg-slate-500 rounded-sm" type="submit">Ingresar</button>
        </form>
    )
}

export default Formulario;