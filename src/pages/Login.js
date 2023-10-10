import React, { useState } from "react";
import Formulario from "../components/Formulario";
import ReactFacebookLogin from "react-facebook-login";
import NavDash from "../components/NavDash";

function Login(){

    const[usuario, setUsuario] = new useState({});

    const respuestaFacebook=(res)=>{
        setUsuario({
            nombre:res.name,
            correo:res.emailz
        })
    }

    return(
        <>
            <NavDash/>

            <div className="container ml-[650px] mt-[300px]">
                <Formulario/>   
            </div>

            <div className=" ml-[650px] mt-[300px]">
                <ReactFacebookLogin
                    appId="1498833210895075"
                    autoLoad={false}
                    fields="name, email"
                    callback={respuestaFacebook}
                />
            </div>

        </>
        
    )
}
// developer.facebook.com
export default Login;