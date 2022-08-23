import React, { useState } from "react";
import "../styles/Register.css";

interface formState {
    nombre : string,
    email : string,
    password: string,
    repeatPassword: string
}

export default function Register(){

    const [formState, setFormState] = useState<formState>({
        nombre : "",
        email : "",
        password : "",
        repeatPassword : ""
    });


    const onChange = (evnt: React.ChangeEvent<HTMLInputElement>)=>{
        setFormState({
            ...formState,
            [evnt.target.name] : evnt.target.value
        });
    }

    return(
        <div id="Registro">
            <h2>Registro</h2>
            <form>
                <input onChange={onChange} name="nombre" type="text" placeholder="Introducde tu nombre"/>
                <input onChange={onChange} name="email" type="email" placeholder="Introduce tu correo electrónico"/>
                <input onChange={onChange} name="password" type="password" placeholder="Introduzca su contraseña"/>
                <input onChange={onChange} name="repeatPassword" type="password" placeholder="Repita su contraseña"/>
                <button>Registrarse</button>
            </form>
        </div>
    );
}