import "../styles/Register.css";

export default function Register(){
    return(
        <div id="Registro">
            <h2>Registro</h2>
            <form>
                <input type="text" placeholder="Introducde tu nombre"/>
                <input type="email" placeholder="Introduce tu correo electrónico"/>
                <input type="password" placeholder="Introduzca su contraseña"/>
                <input type="password" placeholder="Repita su contraseña"/>
                <button>Registrarse</button>
            </form>
        </div>
    );
}