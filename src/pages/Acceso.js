import React from 'react'

import { useState } from 'react';

function Acesso() {

    const [datos, setDatos] = useState({
        usuario:'',
        password:'',
        tipo_usuario:'',
        autenticado: false,
    })

    //se activa la funcion cuando se preciona el formulario
    const enviarFormulario=(e) => {
        e.preventDefault();
        console.log("Enviar formulario");
        console.log(datos.usuario);
        console.log(datos.password);

        // almacenar localmente con locasStotage
        
        localStorage.setItem('elusuario', datos.usuario);
        localStorage.setItem('estautus', true);
        setDatos({...datos,autenticado:true});
    }

    const cerrarSesion=() => {
        localStorage.clear()
        setDatos({...datos,autenticado:false})
    }

  return(
    !datos.autenticado?(
        <>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css"/>

            <form className='input-field col s12 center container' onSubmit={ enviarFormulario }>
                {/* cada que el formulario cambie los valores se asignan */}
                <input className='' type='text' value={datos.usuario} placeholder='Usuario'
                    onChange={(e) => {setDatos ({...datos,usuario: e.target.value})}}>
                </input>
                <input type='password' value={datos.password} placeholder='Contraseña'
                    onChange={(e) => {setDatos ({...datos,password: e.target.value})}}>
                </input>
                <button type='submit' className='waves-effect waves-light btn blue darken-2'>Iniciar sesión</button>
            </form>
    
        </>
    ) : (
        <>
            <button onClick={ cerrarSesion } className='waves-effect waves-light btn'>Salir</button>
        </>
    )
  )
}

export default Acesso